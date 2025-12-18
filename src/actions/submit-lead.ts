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

    if (!validatedFields.success) {
        return {
            success: false,
            message: 'Invalid input',
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const email = validatedFields.data.email;

    try {
        const response = await fetch('https://n8n.srv1020587.hstgr.cloud/webhook/2e149eeb-90c6-4413-ab3e-165638ba0b83', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });

        if (!response.ok) throw new Error(`Webhook failed: ${response.status}`);

        return { success: true, message: 'Checklist sent successfully!' };
    } catch (error) {
        console.error('N8N webhook error:', error);
        return {
            success: false,
            message: 'Failed to send email. Please try again.',
        };
    }
}