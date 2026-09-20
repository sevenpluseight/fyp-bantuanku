import { TextInputProps, View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react-native/icons";

export type InputProps = TextInputProps & {
  label?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
};

export default function Input({
    label,
    helperText,
    error,
    required = false,
    secureTextEntry = false,
    editable = true,
    className = "",
    ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = secureTextEntry;
  const isDisabled = !editable;

  return (
      <View className="w-full">
        {label && (
            <View className="mb-2 flex-row">
              <Text className="text-base font-medium text-foreground">
                {label}
              </Text>

              {required && (
                  <Text className="ml-1 text-accent-red">
                    *
                  </Text>
              )}
            </View>
        )}

        <View
            className={`
              min-h-14
              flex-row
              items-center
              rounded-xl
              border
              bg-background
              px-4
              ${
                error
                  ? "border-accent-red"
                  : "border-border"
              }
              ${isDisabled ? "opacity-50" : ""}
            `}
        >
          <TextInput
              {...props}
              editable={editable}
              secureTextEntry={
                isPassword && !showPassword
              }
              placeholderTextColor="#626775"
              accessibilityLabel={
                props.accessibilityLabel ?? label
              }
              className={`
                flex-1
                py-3
                text-base
                text-foreground
                ${className}
              `}
          />

          {isPassword && (
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
                hitSlop={8}
                onPress={() =>
                  setShowPassword((prev) => !prev)
                }
                className="ml-3 p-1"
              >
                {showPassword ? (
                    <EyeOff
                      size={22}
                      color="#626775"
                    />
                ) : (
                    <Eye
                      size={22}
                      color="#626775"
                    />
                )}
              </Pressable>
          )}
        </View>

        {error ? (
            <Text
              accessibilityRole="alert"
              className="mt-2 text-sm text-accent-red"
            >
              {error}
            </Text>
        ) : helperText ? (
            <Text className="mt-2 text-sm text-muted-foreground">
              {helperText}
            </Text>
        ) : null}
      </View>
  );
}
