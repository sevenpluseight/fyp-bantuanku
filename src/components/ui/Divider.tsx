import { View, type ViewProps } from "react-native";

export type DividerProps = ViewProps;

export default function Divider({
    className = "",
    ...props
}: DividerProps) {
  return (
      <View
          {...props}
          className={`
            h-px
            w-full
            bg-border
            ${className}
          `}
      />
  );
}
