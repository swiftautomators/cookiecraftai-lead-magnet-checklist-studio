'use server';

import { z } from 'zod';

const schema = z.object({
    email: z.string().email(),
});

type FormState = {
    message: string;
    success?: boolean;
    errors?: {
        email?: string[];
    };
};

/**
 * Validate an email extracted from `formData` and send it to the external webhook, returning an updated form state.
 *
 * @param prevState - The previous form state to base the returned state on
 * @param formData - A FormData instance that must include an `email` field
 * @returns A FormState object: `success: true` with a success message when the webhook request succeeds; otherwise `success: false` with either validation `errors` and message `'Invalid input'` or a generic failure message if sending fails
 */
export async function submitLead(prevState: FormState, formData: FormData): Promise<FormState> {
    // Validate input
    const validatedFields = emailSchema.safeParse({
        email: formData.get('email'),
    });

    let attempt = 1;

    while (attempt <= MAX_RETRIES) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000);

            const response = await fetch(N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
                signal: controller.signal,
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                const isServerError = response.status >= 500;
                throw new Error(
                    isServerError
                        ? `Webhook failed: ${response.status} (Server error)`
                        : `Webhook failed: ${response.status}`
                );
            }

            return { success: true };
        } catch (error) {
            const isRetryable = error instanceof Error && (
                error.name === 'AbortError' ||
                error.name === 'TypeError' ||
                error.message.includes('Server error')
            );

            if (isRetryable && attempt < MAX_RETRIES) {
                const delay = BASE_DELAY * Math.pow(2, attempt - 1);
                console.warn(`Attempt ${attempt} failed. Retrying in ${delay}ms...`, error);
                await new Promise(resolve => setTimeout(resolve, delay));
                attempt++;
                continue;
            }

            console.error('N8N webhook error:', error);
            return {
                success: false,
                message: attempt === MAX_RETRIES
                    ? 'Failed to send email after multiple attempts.'
                    : 'Failed to send email. Please try again.',
            };
        }
    }
}
