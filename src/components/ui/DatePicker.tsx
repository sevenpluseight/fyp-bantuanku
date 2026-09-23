import { useState } from "react";
import DateTimePicker, { DateTimePickerChangeEvent } from "@react-native-community/datetimepicker";
import { Platform, Pressable, Text, View } from "react-native";
import { CalendarDays } from "lucide-react-native";

type DateInputProps = {
  label?: string;
  value?: Date;
  onChange: (data: Date) => void;
  placeholder?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  minimumDate?: Date;
  maximumDate?: Date;
  defaultPickerDate?: Date;
  disabled?: boolean;
};

export default function DateInput({
    label,
    value,
    onChange,
    placeholder = "Select a date",
    error,
    helperText,
    required = false,
    minimumDate,
    maximumDate,
    defaultPickerDate,
    disabled = false
}: DateInputProps) {
  const [showPicker, setShowPicker] = useState(false);

  const handleValueChange = (
      _event: DateTimePickerChangeEvent,
      selectedDate: Date
  ) => {
    if (Platform.OS === "android") {
      setShowPicker(false);
    }

    onChange(selectedDate);
  };

  const handleDismiss = () => {
    if (Platform.OS === "android") {
      setShowPicker(false);
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-MY", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
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
            onPress={() => setShowPicker(true)}
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
              value
                ? "text-base text-foreground"
                : "text-base text-muted-foreground"
            }
          >
            {value
              ? formatDate(value)
              : placeholder
            }
          </Text>

          <CalendarDays
            size={20}
            color="#626775"
          />
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

        {showPicker && (
            <DateTimePicker
              value={value ?? new Date() ?? new Date()}
              mode="date"
              display={
                Platform.OS === "ios" ? "spinner" : "default"
              }
              minimumDate={minimumDate}
              maximumDate={maximumDate}
              onValueChange={handleValueChange}
              onDismiss={handleDismiss}
            />
        )}

        {Platform.OS === "ios" && showPicker && (
            <Pressable
              onPress={() => setShowPicker(false)}
              className="mt-2 self-end px-2 py-2"
              hitSlop={8}
            >
              <Text className="font-semibold text-primary">
                Done
              </Text>
            </Pressable>
        )}
      </View>
  );
}
