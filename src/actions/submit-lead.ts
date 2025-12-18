'use server';

import { z } from 'zod';

type FormState = {
    message: string;
    success?: boolean;
    errors?: {
        email?: string[];
    };
};

// Zod v4 best practice
const emailSchema = z.object({
    email: z.string().email({ message: 'Valid email required' }),
});

// Fail fast at module load
if (!process.env.N8N_WEBHOOK_URL?.trim()) {
    throw new Error('N8N_WEBHOOK_URL environment variable is missing or empty. Add it in Vercel dashboard.');
}

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;
const MAX_RETRIES = 3;
const BASE_DELAY = 1000; // ms

/**
 * Submit lead email to N8N webhook with retries and timeout
 */
export async function submitLead(prevState: FormState, formData: FormData): Promise<FormState> {
    const validated = emailSchema.safeParse({
        email: formData.get('email'),
    });

    if (!validated.success) {
        return {
            message: 'Invalid input',
            success: false,
            errors: validated.error.flatten().fieldErrors,
        };
    }

    const { email } = validated.data;
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

            return {
                message: 'Checklist sent! Check your inbox.',
                success: true,
            };
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

            console.error('N8N webhook final error:', error);
            return {
                message: attempt === MAX_RETRIES
                    ? 'Failed after multiple attempts. Try again later.'
                    : 'Failed to send. Please try again.',
                success: false,
            };
        }
    }

    // TypeScript safety
    return { message: 'Unexpected error.', success: false };
} 