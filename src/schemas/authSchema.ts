import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Please enter a valid email."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

export const signupSchema = loginSchema.extend({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters.")
    .max(20, "Username is too long."),
});

export type LoginForm = z.infer<typeof loginSchema>;
export type SignupForm = z.infer<typeof signupSchema>;
