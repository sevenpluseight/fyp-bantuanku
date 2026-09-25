import { RegisterHouseholdIncomeFormData, registerHouseholdIncomeSchema } from "../../../schemas/auth";
import { useTranslation } from "react-i18next";
import { useEffect, useMemo } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pressable, Text, View } from "react-native";
import { Plus, Trash2 } from "lucide-react-native";

import Select from "../../../components/ui/Select";
import Input from "../../../components/ui/Input";
import Card from "../../../components/ui/Card";
import DateInput from "../../../components/ui/DatePicker";
import Button from "../../../components/ui/Button";
import RegistrationProgress from "../../../components/auth/RegistrationProgress";

type RegisterHouseholdIncomeStepProps = {
  defaultValues?: RegisterHouseholdIncomeFormData;
  onBack: () => void;
  onComplete: (data: RegisterHouseholdIncomeFormData) => void;
};

export default function RegisterHouseholdIncomeStep({
    defaultValues,
    onBack,
    onComplete
}: RegisterHouseholdIncomeStepProps) {
  const {t, i18n} = useTranslation();

  const schema = useMemo(
      () => registerHouseholdIncomeSchema(t),
      [t, i18n.resolvedLanguage]
  );

  const employmentStatusOptions = useMemo(
      () => [
        {
          label: t("auth.register.householdIncome.employmentStatusOptions.employed"),
          value: "employed",
        },
        {
          label: t("auth.register.householdIncome.employmentStatusOptions.selfEmployed"),
          value: "self_employed",
        },
        {
          label: t("auth.register.householdIncome.employmentStatusOptions.unemployed"),
          value: "unemployed",
        },
        {
          label: t("auth.register.householdIncome.employmentStatusOptions.retired"),
          value: "retired",
        },
        {
          label: t("auth.register.householdIncome.employmentStatusOptions.notWorking"),
          value: "not_working",
        },
      ], [t, i18n.resolvedLanguage]
  );

  const incomeSourceOptions = useMemo(
      () => [
        {
          label: t("auth.register.householdIncome.incomeSourceOptions.salary"),
          value: "salary",
        },
        {
          label: t("auth.register.householdIncome.incomeSourceOptions.selfEmployment"),
          value: "self_employment",
        },
        {
          label: t("auth.register.householdIncome.incomeSourceOptions.pension"),
          value: "pension",
        },
        {
          label: t("auth.register.householdIncome.incomeSourceOptions.governmentAssistance"),
          value: "government_assistance",
        },
        {
          label: t("auth.register.householdIncome.incomeSourceOptions.familySupport"),
          value: "family_support",
        },
        {
          label: t("auth.register.householdIncome.incomeSourceOptions.savings"),
          value: "savings",
        },
        {
          label: t("auth.register.householdIncome.incomeSourceOptions.other"),
          value: "other",
        },
        {
          label: t("auth.register.householdIncome.incomeSourceOptions.noIncome"),
          value: "no_income",
        },
      ], [t, i18n.resolvedLanguage]
  );

  const relationshipOptions = useMemo(
      () => [
        {
          label: t("auth.register.householdIncome.relationshipOptions.spouse"),
          value: "spouse",
        },
        {
          label: t("auth.register.householdIncome.relationshipOptions.child"),
          value: "child",
        },
        {
          label: t("auth.register.householdIncome.relationshipOptions.parent"),
          value: "parent",
        },
        {
          label: t("auth.register.householdIncome.relationshipOptions.sibling"),
          value: "sibling",
        },
        {
          label: t("auth.register.householdIncome.relationshipOptions.grandchild"),
          value: "grandchild",
        },
        {
          label: t("auth.register.householdIncome.relationshipOptions.other"),
          value: "other",
        },
      ], [t, i18n.resolvedLanguage]
  );

  const {
    control,
    handleSubmit,
    trigger,
    formState: {errors, submitCount}
  } = useForm<RegisterHouseholdIncomeFormData>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues ?? {
      employmentStatus: "",
      incomeSource: "",
      personalMonthlyIncome: "",
      householdMonthlyIncome: "",
      householdMembers: []
    },
  });

  const {
    fields,
    append,
    remove
  } = useFieldArray({
    control,
    name: "householdMembers"
  });

  useEffect(() => {
    if (submitCount > 0) {
      void trigger();
    }
  }, [i18n.resolvedLanguage, submitCount, trigger]);

  const addHouseholdMember = () => {
    append({
      fullName: "",
      relationship: "",
      dateOfBirth: null,
    });
  };

  const minimumDateOfBirth = useMemo(
      () => new Date(1900, 0, 1), []
  );

  const maximumDateOfBirth = useMemo(
      () => new Date(), []
  );

  // const defaultDateOfBirth = useMemo(() => {
  //   const date = new Date();
  //
  //   date.setFullYear(date.getFullYear() - 30);
  //
  //   return date;
  // }, []);

  return (
      <View>
        <View className="mb-8">
          <RegistrationProgress currentStep={4} />

          <Text className="text-3xl font-bold text-foreground">
            {t("auth.register.householdIncome.title")}
          </Text>

          <Text className="mt-2 text-base leading-6 text-muted-foreground">
            {t("auth.register.householdIncome.subtitle")}
          </Text>
        </View>

        <View className="gap-5">
          <Controller
            control={control}
            name="employmentStatus"
            render={({ field: { onChange, value } }) => (
                <Select
                  label={t("auth.register.householdIncome.employmentStatus")}
                  title={t("auth.register.householdIncome.selectEmploymentStatus")}
                  value={value}
                  onChange={onChange}
                  options={employmentStatusOptions}
                  error={errors.employmentStatus?.message}
                  required
                />
            )}
          />

          <Controller
              control={control}
              name="incomeSource"
              render={({ field: { onChange, value } }) => (
                  <Select
                      label={t("auth.register.householdIncome.incomeSource")}
                      title={t("auth.register.householdIncome.selectIncomeSource")}
                      value={value}
                      onChange={onChange}
                      options={incomeSourceOptions}
                      error={errors.incomeSource?.message}
                      required
                  />
              )}
          />

          <Controller
              control={control}
              name="personalMonthlyIncome"
              render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                      label={t("auth.register.householdIncome.personalMonthlyIncome")}
                      placeholder="0.00"
                      value={value}
                      onChangeText={(text) => {
                        const formatted = text
                            .replace(/[^0-9.]/g, "")
                            .replace(/(\..*)\./g, "$1");
                        onChange(formatted);
                      }}
                      onBlur={onBlur}
                      error={errors.personalMonthlyIncome?.message}
                      keyboardType="decimal-pad"
                      required
                  />
              )}
          />

          <Controller
              control={control}
              name="householdMonthlyIncome"
              render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                      label={t("auth.register.householdIncome.householdMonthlyIncome")}
                      placeholder="0.00"
                      value={value}
                      onChangeText={(text) => {
                        const formatted = text
                            .replace(/[^0-9.]/g, "")
                            .replace(/(\..*)\./g, "$1");
                        onChange(formatted);
                      }}
                      onBlur={onBlur}
                      error={errors.householdMonthlyIncome?.message}
                      keyboardType="decimal-pad"
                      required
                  />
              )}
          />

          <View className="mt-4">
            <Text className="text-xl font-bold text-foreground">
              {t("auth.register.householdIncome.householdMembers")}
            </Text>

            <Text className="mt-2 text-sm leading-5 text-muted-foreground">
              {t("auth.register.householdIncome.householdMembersHelper")}
            </Text>
          </View>

          {fields.map((field, index) => (
              <Card
                key={field.id}
                className="gap-5"
              >
                <View className="flex-row items-center justify-between">
                  <Text className="text-base font-semibold text-foreground">
                    {t(
                        "auth.register.householdIncome.householdMember",
                        { number: index + 1 }
                    )}
                  </Text>

                  <Pressable
                    onPress={() => remove(index)}
                    accessibilityRole="button"
                    accessibilityLabel={t("auth.register.householdIncome.removeHouseholdMember")}
                    hitSlop={8}
                    className="h-10 w-10 items-center justify-center rounded-full"
                  >
                    <Trash2 size={20} color="#F5222D" />
                  </Pressable>
                </View>

                <Controller
                    control={control}
                    name={`householdMembers.${index}.fullName`}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            label={t("auth.register.householdIncome.memberFullName")}
                            placeholder={t("auth.register.householdIncome.memberFullNamePlaceholder")}
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            error={errors.householdMembers?.[index]?.fullName?.message}
                            autoCapitalize="words"
                            autoCorrect={false}
                            required
                        />
                    )}
                />

                <Controller
                    control={control}
                    name={`householdMembers.${index}.relationship`}
                    render={({ field: { onChange, value } }) => (
                        <Select
                            label={t("auth.register.householdIncome.relationship")}
                            title={t("auth.register.householdIncome.selectRelationship")}
                            value={value}
                            onChange={onChange}
                            options={relationshipOptions}
                            error={errors.householdMembers?.[index]?.relationship?.message}
                            required
                        />
                    )}
                />



                <Controller
                    control={control}
                    name={`householdMembers.${index}.dateOfBirth`}
                    render={({ field: { onChange, value } }) => (
                        <DateInput
                            label={t("auth.register.householdIncome.memberDateOfBirth")}
                            value={value ?? undefined}
                            onChange={onChange}
                            minimumDate={minimumDateOfBirth}
                            maximumDate={maximumDateOfBirth}
                            error={errors.householdMembers?.[index]?.dateOfBirth?.message}
                            required
                        />
                    )}
                />
              </Card>
          ))}

          <Pressable
            onPress={addHouseholdMember}
            accessibilityRole="button"
            className="min-h-12 flex-row items-center justify-center gap-2 rounded-xl border border-primary
                    bg-background px-4"
          >
            <Plus size={20} color="#0352CE" />

            <Text className="font-semibold text-primary">
              {t("auth.register.householdIncome.addHouseholdMember")}
            </Text>
          </Pressable>

          <Text className="text-sm leading-5 text-muted-foreground">
            {t("auth.register.householdIncome.livingAloneHelper")}
          </Text>

          <View className="mt-2 flex-row gap-3">
            <Pressable
              onPress={onBack}
              accessibilityRole="button"
              className="min-h-12 flex-1 items-center justify-center rounded-xl border border-border bg-background"
            >
              <Text className="font-semibold text-foreground">
                {t("common.back")}
              </Text>
            </Pressable>

            <View className="flex-1">
              <Button
                fullWidth
                onPress={handleSubmit(onComplete)}
              >
                {t("auth.register.householdIncome.complete")}
              </Button>
            </View>
          </View>
        </View>
      </View>
  );
}
