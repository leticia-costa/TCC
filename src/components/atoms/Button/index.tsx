import React from "react";
import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { styles } from "./styles";
import Typography from "../Typography";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  style?: StyleProp<ViewStyle>;
  icon?: IconProp;
}
const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  style,
  ...otherProps
}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} {...otherProps}>
      <Typography style={styles.buttonText}>{label}</Typography>
      {!!icon && <FontAwesomeIcon icon={icon} style={styles.icon} size={35}/>}
    </TouchableOpacity>
  );
};

export default Button;
