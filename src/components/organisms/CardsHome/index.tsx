import React from "react";
import { View } from "react-native";
import {
  faBell,
  faCapsules,
  faCircleInfo,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../../molecules/Card";
import { styles } from "./styles";

const CardsHome: React.FC = () => {
  const cardOptions = [
    {
      icon: faBell,
      label: "Lembretes",
      theme: "dark",
      fullWidth: false,
    },
    {
      icon: faCapsules,
      label: "Medicação",
      theme: "dark",
      fullWidth: false,
    },
  ];
  const cardfullWidthOptions = [
    {
      icon: faCircleInfo,
      label: "Recomendações",
      theme: "light",
      fullWidth: true,
    },
    {
      icon: faClock,
      label: "Smart watch",
      theme: "medium",
      fullWidth: true,
    },
  ];
  return (
    <>
      <View style={styles.container}>
        {cardOptions.map((option) => (
          <Card icon={option.icon} label={option.label} theme={option.theme} />
        ))}
      </View>

      {cardOptions.map((option) => (
        <View style={styles.container}>
          <Card icon={option.icon} label={option.label} theme={option.theme} fullWidth/>
        </View>
      ))}
    </>
  );
};

export default CardsHome;
