import { RegisterResidenceFormData, registerResidenceSchema } from "../../../schemas/auth";
import { useTranslation } from "react-i18next";
import { useEffect, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pressable, Text, View } from "react-native";

import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";
import Button from "../../../components/ui/Button";
import RegistrationProgress from "../../../components/auth/RegistrationProgress";

type RegisterResidenceStepProps = {
  defaultValues?: RegisterResidenceFormData;
  onBack: () => void;
  onContinue: (data: RegisterResidenceFormData) => void;
};

export default function RegisterResidenceStep({
    defaultValues,
    onBack,
    onContinue
}: RegisterResidenceStepProps) {
  const { t, i18n } = useTranslation();

  const schema = useMemo(
      () => registerResidenceSchema(t),
      [t, i18n.language]
  );

  const stateTerritoryOptions = useMemo(
      () => [
        {
          label: "Johor",
          value: "johor",
        },
        {
          label: "Kedah",
          value: "kedah",
        },
        {
          label: "Kelantan",
          value: "kelantan",
        },
        {
          label: "Melaka",
          value: "melaka",
        },
        {
          label: "Negeri Sembilan",
          value: "negeri_sembilan",
        },
        {
          label: "Pahang",
          value: "pahang",
        },
        {
          label: "Pulau Pinang",
          value: "penang",
        },
        {
          label: "Perak",
          value: "perak",
        },
        {
          label: "Perlis",
          value: "perlis",
        },
        {
          label: "Sabah",
          value: "sabah",
        },
        {
          label: "Sarawak",
          value: "sarawak",
        },
        {
          label: "Selangor",
          value: "selangor",
        },
        {
          label: "Terengganu",
          value: "terengganu",
        },
        {
          label: "W.P. Kuala Lumpur",
          value: "kuala_lumpur",
        },
        {
          label: "W.P. Labuan",
          value: "labuan",
        },
        {
          label: "W.P. Putrajaya",
          value: "putrajaya",
        },
      ], []
  );

  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors, submitCount }
  } = useForm<RegisterResidenceFormData>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues ?? {
      addressLine1: "",
      addressLine2: "",
      postcode: "",
      city: "",
      stateTerritory: "",
    },
  });

  useEffect(() => {
    if (submitCount > 0) {
      void trigger();
    }
  }, [i18n.resolvedLanguage, submitCount, trigger]);

  return (
      <View>
        <View className="mb-8">
          <RegistrationProgress currentStep={3} />

          <Text className="text-3xl font-bold text-foreground">
            {t("auth.register.residence.title")}
          </Text>

          <Text className="mt-2 text-base leading-6 text-muted-foreground">
            {t("auth.register.residence.subtitle")}
          </Text>
        </View>

        <View className="gap-5">
          <Controller
            control={control}
            name="addressLine1"
            render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label={t("auth.register.residence.addressLine1")}
                  placeholder={t("auth.register.residence.addressLine1Placeholder")}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  error={errors.addressLine1?.message}
                  autoCapitalize="words"
                  autoCorrect={false}
                  required
                />
            )}
          />

          <Controller
            control={control}
            name="addressLine2"
            render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label={t("auth.register.residence.addressLine2")}
                  placeholder={t("auth.register.residence.addressLine2Placeholder")}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  error={errors.addressLine2?.message}
                  autoCapitalize="words"
                  autoCorrect={false}
                />
            )}
          />

          <Controller
            control={control}
            name="postcode"
            render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label={t("auth.register.residence.postcode")}
                  placeholder={t("auth.register.residence.postcodePlaceholder")}
                  value={value}
                  onChangeText={(text) =>
                    onChange(
                        text
                            .replace(/\D/g, "")
                            .slice(0, 5)
                    )
                  }
                  onBlur={onBlur}
                  error={errors.postcode?.message}
                  keyboardType="number-pad"
                  maxLength={5}
                  required
                />
            )}
          />

          <Controller
            control={control}
            name="city"
            render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label={t("auth.register.residence.city")}
                  placeholder={t("auth.register.residence.cityPlaceholder")}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  error={errors.city?.message}
                  autoCapitalize="words"
                  autoCorrect={false}
                  required
                />
            )}
          />

          <Controller
            control={control}
            name="stateTerritory"
            render={({ field: { onChange, value } }) => (
                <Select
                  label={t("auth.register.residence.stateTerritory")}
                  placeholder={t("auth.register.residence.selectStateTerritory")}
                  value={value}
                  onChange={onChange}
                  options={stateTerritoryOptions}
                  error={errors.stateTerritory?.message}
                  required
                />
            )}
          />

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
                onPress={handleSubmit(onContinue)}
              >
                {t("common.continue")}
              </Button>
            </View>
          </View>
        </View>
      </View>
  );
}
