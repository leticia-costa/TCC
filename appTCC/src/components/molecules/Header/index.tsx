import React from "react";
import {
  StyleProp,
  TextStyle,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import Typography from "../../atoms/Typography";
import { useNavigation } from "@react-navigation/native";
import { propStack } from "../../../routes/Stack/Models";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface HeaderProps {
  style?: StyleProp<TextStyle>;
  text: string;
  variant?: "default" | "dark" | "light";
  size?: "small" | "medium" | "big";
  goBack?: boolean;
  icon?: IconProp;
}

const Header: React.FC<HeaderProps> = ({
  style,
  text,
  size = "medium",
  variant = "default",
  goBack,
  icon,
}) => {
  const navigation = useNavigation<propStack>();

  const themeStyles = styles[variant] || styles.default;
  const sizeStyles = styles[size] || styles.medium;

  return (
    <View style={[styles.container, themeStyles, sizeStyles, style]}>
      <View style={styles.align}>
        {!goBack ? (
          <Image
            source={require("../../../assets/images/logo-light.png")}
            style={{ width: 60, height: 60 }}
          />
        ) : (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon
              icon={faChevronCircleLeft}
              size={40}
              style={themeStyles}
            />
          </TouchableOpacity>
        )}
        <Typography style={themeStyles} variant="subheading">
          {text}
        </Typography>
        {icon && <FontAwesomeIcon icon={icon} size={35} style={themeStyles} />}
      </View>
    </View>
  );
};

export default Header;
