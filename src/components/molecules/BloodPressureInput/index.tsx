import React, { useRef, useState } from "react";
import { View, TextInput } from "react-native";
import Input from "../../atoms/Input";
import Typography from "../../atoms/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeartCirclePlus, faStethoscope } from "@fortawesome/free-solid-svg-icons";
import colors from "../../../utils/colors";
import Button from "../../atoms/Button";
import { styles } from "./styles";

const BloodPressureInput = () => {
  const [systolic, setSystolic] = useState("");
  const [diastolic, setDiastolic] = useState("");
  const diastolicRef = useRef<TextInput | null>(null);

  const handleAddPression = () => {
    if (systolic && diastolicRef.current) {
      console.log(`Pressão Arterial: ${systolic}/${diastolic}`);
    } else {
      alert("Por favor, preencha ambos os valores.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Typography variant="heading" style={styles.label}>
          Pressão{" "}
        </Typography>
        <FontAwesomeIcon icon={faStethoscope} style={styles.icon} size={50} />
      </View>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Ex: 12"
          type="numeric"
          value={systolic}
          onChangeText={(text) => setSystolic(text)}
          onSubmitEditing={() => diastolicRef.current?.focus()}
        />
        <Typography variant="subheading" style={styles.separator}>
          {" "}
          /{" "}
        </Typography>
        <Input
          ref={diastolicRef}
          placeholder="Ex: 8"
          type="numeric"
          value={diastolic}
          onChangeText={(text) => setDiastolic(text)}
        />
      </View>
      <Button
        label="Adicionar"
        onPress={handleAddPression}
        style={styles.button}
        icon={faHeartCirclePlus}
      ></Button>
    </View>
  );
};

export default BloodPressureInput;
