import React from "react";
import { View } from "react-native";
import Typography from "../../atoms/Typography";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { propStack } from "../../../routes/Stack/Models";
import { faCircleInfo, faPills } from "@fortawesome/free-solid-svg-icons";
import Button from "../../atoms/Button";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import colors from "../../../utils/colors";

export interface MedicinesInfoProps {
  title: string;
  medicines: {
    medicine: string;
    instruction: string;
  }[];
  high?: boolean;
}
const MedicinesInfo: React.FC<MedicinesInfoProps> = ({
  medicines,
  title,
  high,
}) => {
  const navigation = useNavigation<propStack>();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.titleDiv}>
          <Typography variant="subheading" style={styles.title}>
            {title}
          </Typography>
        </View>
        <View style={styles.divisor} />
        {medicines.map((item) => (
          <>
            <Typography style={styles.medicinesText}>
              <FontAwesomeIcon icon={faPills} size={35} color={colors.dark}/>
              {` ${item.medicine}`}
            </Typography>
            <Typography style={styles.description}>
              {item.instruction}
            </Typography>
            <View style={styles.divisor} />
          </>
        ))}
        {high && (
          <Button
            style={styles.medicines}
            label="Recomendações"
            icon={faCircleInfo}
            onPress={() => navigation.navigate("Recommendations")}
          />
        )}
      </View>
    </View>
  );
};

export default MedicinesInfo;
