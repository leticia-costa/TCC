import React from "react";
import { Text, StyleProp, TextStyle } from "react-native";
import { styles } from "./styles";
import { ColorProp } from "../../../utils/colors";

interface TypographyProps {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  variant?: "default" | "heading" | "subheading";
}

const Typography: React.FC<TypographyProps> = ({
  style,
  children,
  variant = "default",
}) => {
  const textStyles = styles[variant] || styles.default;

  return <Text style={[textStyles, style]}>{children}</Text>;
};

export default Typography;
