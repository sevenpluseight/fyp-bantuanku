import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "../../schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "../../lib/supabase";
import { KeyboardAvoidingView, Platform, Pressable, Text, View } from "react-native";

import Screen from "../../components/layout/Screen";
import Alert from "../../components/ui/Alert";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import AuthBackground from "../../components/auth/AuthBackground";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {AuthStackParamList} from "../../navigation/types";

type Props = NativeStackScreenProps<AuthStackParamList, "Login">;

export default function LoginScreen({
    navigation
}: Props){
  const [authError, setAuthError] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setAuthError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      setAuthError(error.message);
    }
  };

  return (
      <View className="flex-1 bg-background">
        <AuthBackground />

        <Screen
            transparent
            scroll={false}
        >
          <KeyboardAvoidingView
              className="flex-1"
              behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View className="flex-1 justify-center">
              <View className="mb-8">
                <Text className="text-center text-3xl font-bold text-foreground">
                  Welcome back!
                </Text>

                <Text className="mt-2 text-center text-base leading-6 text-muted-foreground">
                  Sign in to continue using BantuanKu.
                </Text>
              </View>

              <View className="gap-5">
                {authError && (
                    <Alert
                        variant="error"
                        title="Unable to sign in"
                    >
                      {authError}
                    </Alert>
                )}

                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, onBlur, value } }) => (
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
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            label="Password"
                            placeholder="Enter your password"
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            error={errors.password?.message}
                            secureTextEntry
                            autoCapitalize="none"
                            autoCorrect={false}
                            autoComplete="current-password"
                            textContentType="password"
                            returnKeyType="done"
                            onSubmitEditing={handleSubmit(onSubmit)}
                            required
                        />
                    )}
                />

                <Button
                    fullWidth
                    loading={isSubmitting}
                    onPress={handleSubmit(onSubmit)}
                >
                  Sign In
                </Button>

                <View className="flex-row items-center justify-center">
                  <Text className="text-sm text-muted-foreground">
                    Don't have an account?{" "}
                  </Text>

                  <Pressable
                      accessibilityRole="link"
                      onPress={() => navigation.navigate("Register")}
                      className="text-sm font-semibold text-primary"
                      hitSlop={8}
                  >
                    <Text className="text-sm font-semibold text-primary">
                      Create account
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </Screen>
      </View>
  );
}
