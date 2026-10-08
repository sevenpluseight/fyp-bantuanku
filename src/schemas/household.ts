import { z } from "zod";
import { TFunction } from "i18next";
import {
  CITIZENSHIP_VALUES,
  EMPLOYMENT_STATUS_VALUES,
  HOUSEHOLD_RELATIONSHIP_VALUES,
  MYKAD_BIRTHPLACE_CODES
} from "../constants/registration";

export const householdMemberSchema = (t: TFunction) => z.object({
  fullName: z
      .string()
      .trim()
      .min(1, t("validation.householdMemberNameRequired")),

  relationship: z
      .union([
        z.literal(""),
        z.enum(HOUSEHOLD_RELATIONSHIP_VALUES),
      ])
      .refine(
          (value) => value !== "",
          {
            message: t("validation.relationshipRequired"),
          }
      ),

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

export type HouseholdMemberFormData = z.input<ReturnType<typeof householdMemberSchema>>;

export const addHouseholdMemberSchema = (t: TFunction) => {
  return householdMemberSchema(t)
      .safeExtend({
        identificationNumber: z
            .string()
            .trim()
            .default(""),

        gender: z
            .union([
              z.literal(""),
              z.enum(["male", "female"]),
            ]),

        citizenship: z
            .union([
              z.literal(""),
              z.enum(CITIZENSHIP_VALUES),
            ]),

        isDependent: z
            .boolean()
            .nullable(),

        employmentStatus: z
            .union([
              z.literal(""),
              z.enum(EMPLOYMENT_STATUS_VALUES),
            ]),

        occupation: z
            .string()
            .trim()
            .default(""),

        monthlyIncome: z
            .string()
            .trim()
            .refine(
                (value) => {
                  if (value === "") {
                    return true;
                  }

                  const amount = Number(value);

                  return (
                      Number.isFinite(amount) &&
                      amount >= 0 &&
                      amount <= 9999999
                  );
                },
                {
                  message: t("validation.monthlyIncomeInvalid")
                }
            ),

        isStudent: z
            .boolean()
            .nullable(),

        studyMode: z
            .string()
            .trim()
            .default(""),

        institutionType: z
            .string()
            .trim()
            .default(""),

        isOku: z
            .boolean()
            .nullable(),

        okuRegistered: z
            .boolean()
            .nullable(),
      })
      .superRefine((data, ctx) => {
        if (data.dateOfBirth) {
          const selectedDate = new Date(
              data.dateOfBirth.getFullYear(),
              data.dateOfBirth.getMonth(),
              data.dateOfBirth.getDate()
          );

          const today = new Date();
          today.setHours(0, 0, 0, 0);

          if (selectedDate > today) {
            ctx.addIssue({
              code: "custom",
              path: ["dateOfBirth"],
              message: t("validation.dateOfBirthInvalid")
            });
          }
        }

        if (data.identificationNumber !== "") {
          if (data.citizenship === "malaysian") {
            const identificationNumber =
                data.identificationNumber;

            const formatValid =
                /^\d{6}-\d{2}-\d{4}$/.test(identificationNumber);

            if (!formatValid) {
              ctx.addIssue({
                code: "custom",
                path: ["identificationNumber"],
                message: t("validation.myKadNumberInvalid")
              });
            } else {
              const birthplaceCode = identificationNumber.slice(7, 9);

              const birthplaceValid = (MYKAD_BIRTHPLACE_CODES as readonly string[]).includes(birthplaceCode);

              const month = Number(identificationNumber.slice(2, 4));
              const day = Number(identificationNumber.slice(4, 6));

              const daysInMonth = new Date(2000, month, 0).getDate();

              const dateValid =
                  month >= 1 &&
                  month <= 12 &&
                  day >= 1 &&
                  day <= daysInMonth;

              if (!birthplaceValid || !dateValid) {
                ctx.addIssue({
                  code: "custom",
                  path: ["identificationNumber"],
                  message: t("validation.myKadNumberInvalid")
                });
              }
            }
          } else if (data.identificationNumber.length < 5) {
            ctx.addIssue({
              code: "custom",
              path: ["identificationNumber"],
              message: t("validation.identificationNumberInvalid")
            });
          }
        }

        if (data.isStudent === true) {
          if (data.studyMode === "") {
            ctx.addIssue({
              code: "custom",
              path: ["studyMode"],
              message: t("validation.studyModeRequired")
            });
          }

          if (data.institutionType === "") {
            ctx.addIssue({
              code: "custom",
              path: ["institutionType"],
              message: t("validation.institutionTypeRequired")
            });
          }
        }

        if (
            data.isOku === true &&
            data.okuRegistered === null
        ) {
          ctx.addIssue({
            code: "custom",
            path: ["okuRegistered"],
            message: t("validation.okuRegistrationRequired")
          });
        }
      });
};

export type AddHouseholdMemberFormData = z.input<ReturnType<typeof addHouseholdMemberSchema>>;
