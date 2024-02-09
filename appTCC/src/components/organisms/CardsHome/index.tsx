import React from "react";
import { View } from "react-native";
import {
  faBell,
  faCapsules,
  faCircleInfo,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Card, { CardProps } from "../../molecules/Card";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { propStack } from "../../../routes/Stack/Models";

const CardsHome: React.FC = () => {
  const navigation = useNavigation<propStack>();

  const cardOptions: CardProps[] = [
    {
      icon: faBell,
      label: "Lembretes",
      theme: "dark",
      fullWidth: false,
      onPress: () => navigation.navigate("Reminders"),
    },
    {
      icon: faCapsules,
      label: "Medicação",
      theme: "dark",
      fullWidth: false,
      onPress: () => navigation.navigate("Medicines"),
    },
  ];
  const cardfullWidthOptions: CardProps[] = [
    {
      icon: faCircleInfo,
      label: "Recomendações",
      theme: "medium",
      fullWidth: true,
      onPress: () => navigation.navigate("Recommendations"),
    },
    {
      icon: faClock,
      label: "Dispositivos vestiveis",
      theme: "disabled",
      fullWidth: true,
      disabled: true,
    },
  ];
  return (
    <>
      <View style={styles.container}>
        {cardOptions.map((option) => (
          <Card
            icon={option.icon}
            label={option.label}
            theme={option.theme}
            onPress={option.onPress}
            fullWidth={option.fullWidth}
            disabled={option.disabled}
          />
        ))}
      </View>

      {cardfullWidthOptions.map((option) => (
        <View style={[styles.container, styles.cards]}>
          <Card
            icon={option.icon}
            label={option.label}
            theme={option.theme}
            onPress={option.onPress}
            disabled={option.disabled}
            fullWidth={option.fullWidth}
          />
        </View>
      ))}
    </>
  );
};

export default CardsHome;
