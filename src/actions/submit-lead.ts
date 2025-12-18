'use server';

import { z } from 'zod';

const schema = z.object({
    email: z.string().email(),
});

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL!;
const MAX_RETRIES = 3;
const BASE_DELAY = 1000; // ms

export async function submitLead(formData: FormData) {
    const { email } = schema.parse({
        email: formData.get('email'),
    });

    let attempt = 1;

    while (attempt <= MAX_RETRIES) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

            const response = await fetch(N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
                signal: controller.signal,
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`Webhook failed: ${response.status}`);
            }

            return { success: true };
        } catch (error) {
            const isRetryable = error instanceof Error && (
                error.name === 'AbortError' || // Timeout
                error.name === 'TypeError' || // Network
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

    // Unreachable, but TS safety
    return { success: false, message: 'Unexpected error occurred.' };
}
