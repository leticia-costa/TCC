import React from "react";
import {
  GestureResponderEvent,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { styles } from "./styles";
import Typography from "../../atoms/Typography";

export interface CardProps {
  label: string;
  style?: StyleProp<ViewStyle>;
  icon?: IconProp;
  theme: "light" | "dark" | "medium" | "disabled";
  fullWidth?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  disabled?: boolean;
}
const Card: React.FC<CardProps> = ({
  label,
  icon,
  style,
  theme,
  fullWidth,
  onPress,
  disabled,
}) => {

  const themeStyle = styles[theme] || styles.light;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        themeStyle,
        fullWidth && styles.fullWidth,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {!!icon && (
        <FontAwesomeIcon icon={icon} style={themeStyle} size={48} />
      )}
      <Typography style={themeStyle}>{label}</Typography>
    </TouchableOpacity>
  );
};

export default Card;
