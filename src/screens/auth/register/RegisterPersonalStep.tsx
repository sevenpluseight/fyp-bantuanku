import { RegisterPersonalFormData, registerPersonalSchema } from "../../../schemas/auth";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pressable, Text, View } from "react-native";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";
import Button from "../../../components/ui/Button";
import DateInput from "../../../components/ui/DatePicker";


type RegisterPersonalStepProps = {
  defaultValues?: RegisterPersonalFormData;
  onBack: () => void;
  onContinue: (data: RegisterPersonalFormData) => void;
};

const citizenshipOptions = [
  {
    label: "Malaysian",
    value: "malaysian",
  },
  {
    label: "Non-Malaysian",
    value: "non_malaysian",
  },
];

const formatMyKad = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 12);

  if (digits.length <= 6) {
    return digits;
  }

  if (digits.length <= 8) {
    return `${digits.slice(0, 6)}-${digits.slice(6)}`;
  }

  return `${digits.slice(0, 6)}-${digits.slice(6, 8)}-${digits.slice(8)}`
};

const formatMobileNumber = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 3) {
    return digits;
  }

  return `${digits.slice(0, 3)}-${digits.slice(3)}`;
};

export default function RegisterPersonalStep({
    defaultValues,
    onBack,
    onContinue
}: RegisterPersonalStepProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterPersonalFormData>({
    resolver: zodResolver(registerPersonalSchema),
    defaultValues: defaultValues ?? {
      fullName: "",
      myKadNumber: "",
      dateOfBirth: undefined,
      citizenship: "malaysian",
      mobileNumber: "",
    },
  });

  return (
      <View>
        <View className="mb-8">
          <Text className="text-3xl font-bold text-foreground">
            Personal Details
          </Text>

          <Text className="mt-2 text-base leading-6 text-muted-foreground">
            Tell us about the person who will receive aid recommendations.
          </Text>

          <Text className="mt-4 text-sm font-medium text-primary">
            Step 2 of 4
          </Text>
        </View>

        <View className="gap-5">
          <Controller
            control={control}
            name="fullName"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Full Name"
                placeholder="Enter full name"
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
            name="myKadNumber"
            render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label="IC Number"
                  placeholder="XXXXXX-XX-XXXX"
                  value={value}
                  onChangeText={(text) => onChange(formatMyKad(text))}
                  onBlur={onBlur}
                  error={errors.myKadNumber?.message}
                  keyboardType="number-pad"
                  maxLength={14}
                  required
                />
            )}
          />

          <Controller
            control={control}
            name="dateOfBirth"
            render={({ field: { onChange, value } }) => (
                <DateInput
                  label="Date of Birth"
                  value={value}
                  onChange={onChange}
                  minimumDate={new Date(1900, 0, 1)}
                  maximumDate={new Date()}
                  error={errors.dateOfBirth?.message}
                  required
                />
            )}
          />

          <Controller
            control={control}
            name="citizenship"
            render={({ field: { onChange, value, } }) => (
                <Select
                  label="Citizenship"
                  title="Select citizenship"
                  value={value}
                  onChange={onChange}
                  options={citizenshipOptions}
                  error={errors.citizenship?.message}
                  required
                />
            )}
          />

          <Controller
            control={control}
            name="mobileNumber"
            render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label="Mobile Number"
                  placeholder="012-3456789"
                  value={value}
                  onChangeText={(text) => onChange(formatMobileNumber(text))}
                  onBlur={onBlur}
                  error={errors.mobileNumber?.message}
                  keyboardType="number-pad"
                  maxLength={12}
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
                Back
              </Text>
            </Pressable>

            <View className="flex-1">
              <Button
                fullWidth
                onPress={handleSubmit(onContinue)}
              >
                Continue
              </Button>
            </View>
          </View>
        </View>
      </View>
  );
}
