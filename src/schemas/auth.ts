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

export const registerResidenceSchema = (t: TFunction) => z.object({
  addressLine1: z
      .string()
      .trim()
      .min(1, t("validation.addressLine1Required")),

  addressLine2: z
      .string()
      .trim()
      .optional(),

  postcode: z
      .string()
      .trim()
      .min(1, t("validation.postcodeRequired"))
      .regex(/^\d{5}$/, t("validation.postcodeInvalid")),

  city: z
      .string()
      .trim()
      .min(1, t("validation.cityRequired")),

  stateTerritory: z
      .string()
      .trim()
      .min(1, t("validation.stateTerritoryRequired")),
});

export type RegisterResidenceFormData = z.infer<ReturnType<typeof registerResidenceSchema>>;

export const registerHouseholdIncomeSchema = (t: TFunction) => {
  const householdMemberSchema = z.object({
    fullName: z
        .string()
        .trim()
        .min(1, t("validation.householdMemberNameRequired")),

    relationship: z
        .string()
        .trim()
        .min(1, t("validation.relationshipRequired")),

    dateOfBirth: z
        .date()
        .nullable()
        .refine(
            (value) => value !== null,
            {
              message: t("validation.householdMemberDobRequired")
            },
        ),
  });

  return z.object({
    employmentStatus: z
        .string()
        .trim()
        .min(1, t("validation.employmentStatusRequired")),

    incomeSource: z
        .string()
        .trim()
        .min(1, t("validation.incomeSourceRequired")),

    personalMonthlyIncome: z
        .string()
        .trim()
        .min(1, t("validation.personalMonthlyIncomeRequired"))
        .refine(
            (value) => {
              const amount = Number(value)


              return (
                  Number.isFinite(amount) && amount >= 0
              );
            },
            {
              message: t("validation.monthlyIncomeInvalid")
            },
        ),

    householdMonthlyIncome: z
        .string()
        .trim()
        .min(1, t("validation.householdMonthlyIncomeRequired"))
        .refine(
            (value) => {
              const amount = Number(value)

              return (
                  Number.isFinite(amount) && amount >= 0
              );
            },
            {
              message: t("validation.monthlyIncomeInvalid")
            },
        ),

    householdMembers: z.array(householdMemberSchema),
  });
};

export type RegisterHouseholdIncomeFormData = z.input<ReturnType<typeof registerHouseholdIncomeSchema>>;
