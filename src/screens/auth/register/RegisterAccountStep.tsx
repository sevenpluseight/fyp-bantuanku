import { RegisterFormData, registerSchema } from "../../../schemas/auth";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Text, View } from "react-native";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

type RegisterAccountStepProps = {
  defaultValues?: RegisterFormData;
  onContinue: (data: RegisterFormData) => void;
};

export default function RegisterAccountStep({
    defaultValues,
    onContinue
}: RegisterAccountStepProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: defaultValues ?? {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
      <View>
        <View className="mb-8">
          <Text className="text-3xl font-bold text-foreground">
            Create your account
          </Text>

          <Text className="mt-2 text-base leading-6 text-muted-foreground">
            Enter your account details to get started with BantuanKu.
          </Text>

          <Text className="mt-4 text-sm font-medium text-primary">
            Step 1 of 4
          </Text>
        </View>

        <View className="gap-5">
          <Controller
            control={control}
            name="email"
            render={({
              field: { onChange, onBlur, value },
            }) => (
                <Input
                  label="Email"
                  placeholder="Enter your email"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  error={errors.email?.message}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoComplete="email"
                  textContentType="emailAddress"
                  required
                />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({
              field: { onChange, onBlur, value },
            }) => (
                <Input
                  label="Password"
                  placeholder="Create a password"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  error={errors.password?.message}
                  helperText="Use at least 8 characters."
                  secureTextEntry
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoComplete="new-password"
                  textContentType="password"
                  required
                />
            )}
          />

          <Controller
            control={control}
            name="confirmPassword"
            render={({
              field: { onChange, onBlur, value },
            }) => (
                <Input
                  label="Confirm Password"
                  placeholder="Enter your password again"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  error={errors.confirmPassword?.message}
                  secureTextEntry
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoComplete="new-password"
                  textContentType="newPassword"
                  returnKeyType="done"
                  onSubmitEditing={handleSubmit(onContinue)}
                  required
                />
            )}
          />

          <Button
            fullWidth
            onPress={handleSubmit(onContinue)}
          >
            Continue
          </Button>
        </View>
      </View>
  );
}
