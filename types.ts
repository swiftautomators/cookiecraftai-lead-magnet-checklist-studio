import { z } from 'zod';
import React from 'react';

export const emailSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
});

export type EmailFormData = z.infer<typeof emailSchema>;

export interface FeaturePoint {
  title: string;
  description: string;
  icon: React.ReactNode;
}