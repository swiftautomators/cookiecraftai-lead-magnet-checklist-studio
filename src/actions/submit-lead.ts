'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { WelcomeEmail } from '@/emails/WelcomeEmail';

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

    // Mock for development if no key
    if (!process.env.RESEND_API_KEY) {
        if (process.env.NODE_ENV === 'production') {
            console.error("Missing RESEND_API_KEY in production!");
            return { success: false, message: 'Configuration error. Please contact support.' };
        }
        console.log('[DEV] Mocking successful submission for:', email);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
        return { success: true, message: 'Checklist sent! (Mock)' };
    }

    try {
        // 1. Send Welcome Email
        // Note: We need the WelcomeEmail component. 
        // For now we will assume it exists or use a simple HTML string if that's safer to decouple.
        // But the plan called for creating it. I will import it, but I haven't created it yet.
        // To avoid build errors during this step, I will use a placeholder React node or simple object until I create the file.
        // Actually, I should create the email template FIRST or stub it.
        // I'll create the email template in a separate step. For now, let's use a basic html string or wait.
        // Better strategy: Create `src/emails/WelcomeEmail.tsx` first. 

        // I will use a simple text email for now and update it later, 
        // OR I will assume I am writing the email template immediately after.

        // Let's defer strict Resend call implementation specifics slightly or write the EmailTemplate now in a separate call?
        // I can write multiple files in parallel if I am careful.

        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
            from: 'CookieCraft AI <hello@checklist.cookiecraftai.com>', // Update domain once verified
            to: email,
            subject: '🍪 Your Cookie Business Checklist is Inside!',
            react: WelcomeEmail({ userEmail: email }) as React.ReactElement,
        });

        // 2. (Optional) Add to audience
        if (process.env.RESEND_AUDIENCE_ID) {
            await resend.contacts.create({
                email: email,
                audienceId: process.env.RESEND_AUDIENCE_ID,
            });
        }

        return { success: true, message: 'Checklist sent successfully!' };
    } catch (error) {
        console.error('Resend Error:', error);
        return {
            success: false,
            message: 'Failed to send email. Please try again.',
        };
    }
}
