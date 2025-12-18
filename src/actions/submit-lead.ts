'use server';

import { z } from 'zod';

const emailSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
});

type FormState = {
    message: string;
    success?: boolean;
    errors?: {
        email?: string[];
    };
};

export async function submitLead(prevState: FormState, formData: FormData): Promise<FormState> {
    // Validate input
    const validatedFields = emailSchema.safeParse({
        email: formData.get('email'),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            message: 'Invalid input',
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const email = validatedFields.data.email;
    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!webhookUrl) {
        console.error('Configuration Error: N8N_WEBHOOK_URL is missing.');
        return { success: false, message: 'System configuration error.' };
    }

    const MAX_RETRIES = 3;
    const BASE_DELAY = 1000; // 1 second

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

        try {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
                signal: controller.signal,
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                // Retry on server errors (5xx)
                if (response.status >= 500) {
                    throw new Error(`Server error: ${response.status}`);
                }
                // Client errors (4xx) are fatal, don't retry
                throw new Error(`Webhook failed: ${response.status}`);
            }

            return { success: true, message: 'Checklist sent successfully!' };

        } catch (error) {
            clearTimeout(timeoutId);

            const isRetryable = error instanceof Error && (
                error.name === 'AbortError' ||
                error.name === 'TypeError' || // Network error
                error.message.includes('Server error')
            );

            if (isRetryable && attempt < MAX_RETRIES) {
                const delay = BASE_DELAY * Math.pow(2, attempt - 1);
                console.warn(`Attempt ${attempt} failed. Retrying in ${delay}ms...`, error);
                await new Promise(resolve => setTimeout(resolve, delay));
                continue;
            }

            console.error('N8N webhook error:', error);
            // If it's the last attempt or not retryable, return failure
            if (attempt === MAX_RETRIES || !isRetryable) {
                return {
                    success: false,
                    message: 'Failed to send email. Please try again.',
                };
            }
        }
    }

    return { success: false, message: 'Failed to send email after multiple attempts.' };
}
