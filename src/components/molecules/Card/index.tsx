import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { styles } from "./styles";
import Typography from "../../atoms/Typography";

interface CardProps {
  label: string;
  style?: StyleProp<ViewStyle>;
  icon?: IconProp;
  theme: "light" | "dark" | "medium";
  fullWidth?: boolean;
}
const Card: React.FC<CardProps> = ({ label, icon, style, theme, fullWidth }) => {
  return (
    <View
      style={[
        styles.container,
        !!theme ? styles.theme : styles.light,
        !!fullWidth ? fullWidth : "",
        style
      ]}
    >
      {!!icon && (
        <FontAwesomeIcon
          icon={icon}
          style={!!theme ? styles.theme : styles.light}
          size={48}
        />
      )}
      <Typography style={!!theme ? styles.theme : styles.light}>
        {label}
      </Typography>
    </View>
  );
};

export default Card;
