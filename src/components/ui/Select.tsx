import { useState } from "react";
import { Modal, Pressable, ScrollView, Text, View } from "react-native";
import { Check, ChevronDown, X } from "lucide-react-native";

export type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  label?: string;
  value?: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  title?: string;
};

export default function Select({
    label,
    value,
    options,
    onChange,
    placeholder = "Select an option",
    error,
    helperText,
    required = false,
    disabled = false,
    title
}: SelectProps) {
  const [visible, setVisible] = useState(false);

  const selectedOption = options.find(
      (option) => option.value === value
  );

  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue);
    setVisible(false);
  };

  return (
      <View>
        {label && (
            <Text className="mb-2 text-sm font-medium text-foreground">
              {label}

              {required && (
                  <Text className="text-red-600">
                    {" *"}
                  </Text>
              )}
            </Text>
        )}

        <Pressable
            disabled={disabled}
            onPress={() => setVisible(true)}
            accessibilityRole="button"
            accessibilityLabel={label}
            className={`
              min-h-12
              flex-row
              items-center
              justify-between
              rounded-xl
              border
              px-4
            ${
              error 
                  ? "border-red-600"
                  : "border-border"
            }
          
            ${
              disabled
                  ? "opacity-50"
                  : "bg-background"
            }
          `}
        >
          <Text
              className={
                selectedOption
                    ? "text-base text-foreground"
                    : "text-base text-muted-foreground"
              }
          >
            {selectedOption?.label ?? placeholder}
          </Text>

          <ChevronDown size={20} color="#626775"/>
        </Pressable>

        {error ? (
            <Text className="mt-1.5 text-sm text-red-600">
              {error}
            </Text>
        ) : helperText ? (
            <Text className="mt-1.5 text-sm text-muted-foreground">
              {helperText}
            </Text>
        ) : null}

        <Modal
          visible={visible}
          transparent
          animationType="fade"
          onRequestClose={() => setVisible(false)}
        >
          <View className="flex-1 justify-end bg-black/40">
            <Pressable
              onPress={() => setVisible(false)}
              hitSlop={8}
              accessibilityRole="button"
              accessibilityLabel="Close selection"
            />
              <View className="min-h-[70%] rounded-t-3xl bg-background px-5 pb-8 pt-5">
                <View className="mb-4 flex-row items-center justify-between">
                  <Text className="text-lg font-semibold text-foreground">
                    {title ?? label ?? "Select an option"}
                  </Text>

                  <Pressable
                    onPress={() => setVisible(false)}
                    hitSlop={8}
                    accessibilityRole="button"
                    accessibilityLabel="Close selection"
                  >
                    <X size={22} color="#626775" />
                  </Pressable>
                </View>

                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  bounces={false}
                >
                  {options.map((option) => {
                    const selected = option.value === value;

                    return (
                        <Pressable
                            key={option.value}
                            onPress={() => handleSelect(option.value)}
                            accessibilityRole="button"
                            accessibilityState={{ selected }}
                            className="min-h-14 flex-row items-center justify-between border-b border-border py-4"
                        >
                          <Text
                              className={`flex-1 pr-4 text-base ${
                                  selected
                                      ? "font-semibold text-primary"
                                      : "text-foreground"
                              }`}
                          >
                            {option.label}
                          </Text>

                          {selected && (
                              <Check size={20} color="#0352CE" />
                          )}
                        </Pressable>
                    );
                  })}
                </ScrollView>
              </View>
          </View>
        </Modal>
      </View>
  );
}
