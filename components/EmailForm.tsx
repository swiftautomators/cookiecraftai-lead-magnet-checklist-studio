import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { emailSchema, EmailFormData } from '../types';

interface EmailFormProps {
  className?: string;
}

const EmailForm: React.FC<EmailFormProps> = ({ className = "" }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = async (data: EmailFormData) => {
    setIsSubmitting(true);
    
    // SIMULATION OF SERVER ACTION
    // In a real Next.js app, this would be:
    // await submitLead(formData);
    // Which would call Resend SDK to add contact and send email
    
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log(`[Server Action Simulation] Adding ${data.email} to 'checklist-leads' audience.`);
      console.log(`[Server Action Simulation] Sending Welcome Email with PDF link.`);
      
      // Navigate to Thank You page
      navigate('/thank-you');
    } catch (error) {
      console.error('Submission failed', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`w-full max-w-md ${className}`}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </div>
          <input
            type="email"
            {...register('email')}
            placeholder="Enter your best email address"
            className={`w-full pl-10 pr-4 py-4 rounded-lg border-2 outline-none transition-all duration-200 ${
              errors.email 
                ? 'border-red-300 focus:border-red-500 bg-red-50' 
                : 'border-gray-200 focus:border-cookie-500 hover:border-cookie-300'
            }`}
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm mt-1 ml-1 flex items-center gap-1">
            <span className="inline-block w-4 h-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">!</span>
            {errors.email.message}
          </p>
        )}
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="group relative w-full bg-cookie-600 hover:bg-cookie-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 overflow-hidden"
        >
          {isSubmitting ? (
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
};

export default EmailForm;