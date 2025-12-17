'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { z } from 'zod';
import { submitLead } from '@/actions/submit-lead';

// Define schema locally or import shared
const formSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
});

type FormData = z.infer<typeof formSchema>;

export default function EmailForm({ className = "" }: { className?: string }) {
    const router = useRouter();
    const [isPending, setIsPending] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsPending(true);
        setServerError(null);

        const formData = new FormData();
        formData.append('email', data.email);

        // Call Server Action
        const result = await submitLead({ message: '' }, formData);

        if (result.success) {
            router.push('/thank-you');
        } else {
            setServerError(result.message || 'Something went wrong. Please try again.');
            setIsPending(false);
        }
    };

    return (
        <div className={`w-full max-w-md ${className}`}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    </div>
                    <input
                        type="email"
                        {...register('email')}
                        placeholder="Enter your best email address"
                        aria-label="Email address"
                        className={`w-full pl-10 pr-4 py-4 rounded-lg border-2 outline-none transition-all duration-200 text-gray-900 ${errors.email || serverError
                            ? 'border-red-300 focus:border-red-500 bg-red-50'
                            : 'border-gray-200 focus:border-cookie-500 hover:border-cookie-300'
                            }`}
                    />
                </div>

                {/* Validation Errors */}
                {errors.email && (
                    <p className="text-red-500 text-sm mt-1 ml-1 flex items-center gap-1" role="alert">
                        <span className="inline-block w-4 h-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">!</span>
                        {errors.email.message}
                    </p>
                )}

                {/* Server Errors (Submission Failure) */}
                {serverError && (
                    <p className="text-red-600 text-sm mt-1 ml-1 flex items-center gap-1 font-medium bg-red-50 p-2 rounded" role="alert">
                        <span className="inline-block w-4 h-4 bg-red-600 text-white rounded-full text-xs flex items-center justify-center">!</span>
                        {serverError}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={isPending}
                    className="group relative w-full bg-cookie-600 hover:bg-cookie-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 overflow-hidden"
                >
                    {isPending ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Sending Checklist...</span>
                        </>
                    ) : (
                        <>
                            <span>DOWNLOAD MY CHECKLIST</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>

                <p className="text-center text-xs text-gray-500 mt-2 flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                    <span>Your data is secure. Unsubscribe at any time.</span>
                </p>
            </form>
        </div>
    );
}
