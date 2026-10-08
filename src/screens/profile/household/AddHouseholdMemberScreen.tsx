import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProfileStackParamList } from "../../../types/tabNavigator";
import { useTranslation } from "react-i18next";
import { useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { HouseholdMemberFormData, householdMemberSchema } from "../../../schemas/household";
import { zodResolver } from "@hookform/resolvers/zod";
import { createHouseholdMember } from "../../../services/profile/householdService";
import { HouseholdRelationshipValue } from "../../../constants/registration";
import { View } from "react-native";

import Screen from "../../../components/layout/Screen";
import ScreenHeader from "../../../components/layout/ScreenHeader";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";
import DateInput from "../../../components/ui/DatePicker";
import Button from "../../../components/ui/Button";
import AlertDialog from "../../../components/ui/AlertDialog";

type AddHouseholdMemberScreenProps = NativeStackScreenProps<ProfileStackParamList, "AddHouseholdMember">;

export default function AddHouseholdMemberScreen({
    navigation
}: AddHouseholdMemberScreenProps) {
  const { t, i18n } = useTranslation();

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const relationshipOptions = useMemo<
      {
        label: string;
        value: HouseholdRelationshipValue;
      }[]
  >(
      () => [
        {
          label: t("profile.household.relationship.spouse"),
          value: "spouse",
        },
        {
          label: t("profile.household.relationship.child"),
          value: "child",
        },
        {
          label: t("profile.household.relationship.parent"),
          value: "parent",
        },
        {
          label: t("profile.household.relationship.sibling"),
          value: "sibling",
        },
        {
          label: t("profile.household.relationship.grandchild"),
          value: "grandchild",
        },
        {
          label: t("profile.household.relationship.other"),
          value: "other",
        },
      ], [t, i18n.resolvedLanguage]
  );

  const minimumDateOfBirth = useMemo(
      () => new Date(1900, 0, 1), []
  );

  const maximumDateOfBirth = useMemo(
      () => new Date(), []
  );

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<HouseholdMemberFormData>({
    resolver: zodResolver(householdMemberSchema(t)),
    defaultValues: {
      fullName: "",
      relationship: "",
      dateOfBirth: null
    }
  });

  const onSubmit = async (
      data: HouseholdMemberFormData
  )=> {
    if (submitting || !data.dateOfBirth) {
      return;
    }

    try {
      setSubmitting(true);
      setError(false);

      const memberId =
          await createHouseholdMember({
            fullName: data.fullName,
            relationship: data.relationship,
            dateOfBirth: data.dateOfBirth
          });

      navigation.replace(
          "HouseholdMember",
          {
            memberId
          }
      );
    } catch (submitError) {
      if (__DEV__) {
        console.error("[PROFILE] Failed to create household member", submitError);
      }

      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
      <Screen>
        <ScreenHeader
            title={t("profile.household.addMember")}
            description={t("profile.household.add.description")}
            onBack={() => navigation.goBack()}
            className="mb-8"
        />

        <View className="gap-6">
          <Controller
              control={control}
              name="fullName"
              render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                      label={t("profile.household.member.fullName")}
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      error={errors.fullName?.message}
                      autoCapitalize="words"
                      autoCorrect={false}
                      required
                  />
              )}
          />

          <Controller
              control={control}
              name="relationship"
              render={({ field: { onChange, value } }) => (
                  <Select
                      label={t("profile.household.member.relationship")}
                      title={t("profile.household.add.selectRelationship")}
                      value={value}
                      onChange={onChange}
                      options={relationshipOptions}
                      error={errors.relationship?.message}
                      required
                  />
              )}
          />

          <Controller
              control={control}
              name="dateOfBirth"
              render={({ field: { onChange, value } }) => (
                  <DateInput
                      label={t("profile.household.member.dateOfBirth")}
                      value={value ?? undefined}
                      onChange={onChange}
                      minimumDate={minimumDateOfBirth}
                      maximumDate={maximumDateOfBirth}
                      error={errors.dateOfBirth?.message}
                      required
                  />
              )}
          />

          <Button
              fullWidth
              onPress={handleSubmit(onSubmit)}
              loading={submitting}
          >
            {t("common.save")}
          </Button>
        </View>

        <AlertDialog
            visible={error}
            variant="error"
            title={t("profile.household.add.errorTitle")}
            message={t("profile.household.add.errorDescription")}
            confirmText={t("common.ok")}
            onConfirm={() => setError(false)}
            onDismiss={() => setError(false)}
        />
      </Screen>
  );
}
