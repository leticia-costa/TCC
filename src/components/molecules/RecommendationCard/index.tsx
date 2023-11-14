import React from "react";
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import Typography from "../../atoms/Typography";
import { PressureLevel } from "../../../../interfaces/bloodPreassure";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { propStack } from "../../../routes/Stack/Models";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPills } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface RecommendationCardProps {
  title: string;
  description: string;
  medicines?: string;
  type?: PressureLevel;
  style?: StyleProp<ViewStyle>;
  icon?: IconProp;
}
const RecommendationCard: React.FC<RecommendationCardProps> = ({
  medicines,
  style,
  description,
  title,
  icon,
  type = "normal",
}) => {
  const navigation = useNavigation<propStack>();
  const themeStyle = styles[type] || styles.normal;

  return (
    <View style={styles.container}>
      <View style={[styles.card, themeStyle]}>
        <View style={[styles.titleDiv, themeStyle]}>
          <Typography variant="subheading" style={[styles.title, themeStyle]}>
            {title}
          </Typography>
          {icon && <FontAwesomeIcon icon={icon} size={30} style={themeStyle} />}
        </View>
        <View style={[styles.divisor, themeStyle]} />
        <Typography style={styles.description}>{description}</Typography>
        <View style={[styles.divisor, themeStyle]} />

        {medicines && (
          <TouchableOpacity
            style={styles.medicines}
            onPress={() => navigation.navigate("Medicines")}
          >
            <Typography style={[styles.medicinesText, themeStyle]}>
              <FontAwesomeIcon icon={faPills} size={35} style={themeStyle} />
              {` Medicação: ${medicines}`}
            </Typography>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default RecommendationCard;
