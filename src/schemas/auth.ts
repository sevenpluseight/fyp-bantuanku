import { z } from "zod";

export const loginSchema = z.object({
  email: z
      .string()
      .trim()
      .min(1, "Email is required.")
      .pipe(
          z.email("Enter a valid email address.")
      ),

  password: z
      .string()
      .min(1, "Password is required."),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  email: z
      .string()
      .trim()
      .min(1, "Email is required.")
      .pipe(
          z.email("Enter a valid email address.")
      ),

  password: z
      .string()
      .min(1, "Password is required.")
      .min(8, "Password must contain at least 8 characters."),

  confirmPassword: z
      .string()
      .min(1, "Please confirm your password."),
})
    .refine(
        (data) => data.password === data.confirmPassword,
        {
          message: "Password do not match,",
          path: ["confirmPassword"],
        }
    );

export type RegisterFormData = z.infer<typeof registerSchema>;

export const registerPersonalSchema = z.object({
  fullName: z
      .string()
      .trim()
      .min(1, "Full name is required."),

  myKadNumber: z
      .string()
      .trim()
      .min(1, "IC number is required.")
      .regex(
          /^\d{6}-\d{2}-\d{4}$/,
          "Enter a valid 12-digit IC number."
      ),

  dateOfBirth: z.date({
    error: "Date of birth is required.",
  }),

  citizenship: z
      .string()
      .min(1, "Citizenship is required."),

  mobileNumber: z
      .string()
      .trim()
      .min(1, "Mobile number is required.")
      .refine(
          (value) => {
            const digits = value.replace(/\D/g, "");

            return /^01\d{8,9}$/.test(digits);
          },
          {
            message: "Enter a valid Malaysian mobile number.",
          }
      ),
});

export type RegisterPersonalFormData = z.infer<typeof registerPersonalSchema>;
