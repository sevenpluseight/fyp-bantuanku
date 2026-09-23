import { z } from "zod";
import { TFunction } from "i18next";

export const loginSchema = (t: TFunction) => z.object({
  email: z
      .string()
      .trim()
      .min(1, t("validation.emailRequired"))
      .pipe(
          z.email(t("validation.emailInvalid"))
      ),

  password: z
      .string()
      .min(1, t("validation.passwordRequired")),
});

export type LoginFormData = z.infer<ReturnType<typeof loginSchema>>;

export const registerSchema = (t: TFunction) => z.object({
  email: z
      .string()
      .trim()
      .min(1, t("validation.emailRequired"))
      .pipe(
          z.email(t("validation.emailInvalid"))
      ),

  password: z
      .string()
      .min(1, t("validation.passwordRequired"))
      .min(8, t("validation.passwordTooShort")),

  confirmPassword: z
      .string()
      .min(1, t("validation.confirmPasswordRequired")),
})
    .refine(
        (data) => data.password === data.confirmPassword,
        {
          message: t("validation.passwordMismatch"),
          path: ["confirmPassword"],
        }
    );

export type RegisterFormData = z.infer<ReturnType<typeof registerSchema>>;

export const registerPersonalSchema = (t: TFunction) => z.object({
  fullName: z
      .string()
      .trim()
      .min(1, t("validation.fullNameRequired")),

  myKadNumber: z
      .string()
      .trim()
      .min(1, t("validation.myKadNumberRequired"))
      .regex(
          /^\d{6}-\d{2}-\d{4}$/,
          t("validation.myKadNumberInvalid")
      ),

  dateOfBirth: z.date({
    error: t("validation.dateOfBirthRequired"),
  }),

  citizenship: z
      .string()
      .min(1, t("validation.citizenshipRequired")),

  mobileNumber: z
      .string()
      .trim()
      .min(1, t("validation.mobileNumberRequired"))
      .refine(
          (value) => {
            const digits = value.replace(/\D/g, "");

            return /^01\d{8,9}$/.test(digits);
          },
          {
            message: t("validation.mobileNumberInvalid"),
          }
      ),
});

export type RegisterPersonalFormData = z.infer<ReturnType<typeof registerPersonalSchema>>;
