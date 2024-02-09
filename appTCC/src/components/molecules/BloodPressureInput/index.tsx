import React, { useId, useRef, useState } from "react";
import { View, TextInput } from "react-native";
import Input from "../../atoms/Input";
import Typography from "../../atoms/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHeartCirclePlus,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../atoms/Button";
import { styles } from "./styles";
import handleAlertPreassure from "../../../utils/handleAlertPreassure";
import postBloodPreassure from "../../../../mocks/BloodPressure/postBloodPreassure";
import { BloodPreassure } from "../../../../interfaces/bloodPreassure";
import preassureLevel from "../../../utils/preassureLevel";

const BloodPressureInput = () => {
  const [systolic, setSystolic] = useState("");
  const [dystolic, setDystolic] = useState("");
  const dystolicRef = useRef<TextInput | null>(null);
  const bloodPreassureId = useId();

  const handleAddPression = () => {
    if (systolic && dystolic) {
      const level = preassureLevel(Number(systolic), Number(dystolic));
      handleAlertPreassure(level);
      const newData: BloodPreassure = {
        id: bloodPreassureId,
        patientId: 1,
        date: new Date(),
        systolicPressure: Number(systolic),
        dystolicPressure: Number(dystolic),
        pressureLevel: level,
      };
      postBloodPreassure(newData);
      setDystolic("");
      setSystolic("");
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
          value={systolic}
          onChangeText={(value) => setSystolic(value)}
          style={styles.input}
          placeholder="Ex: 12"
          returnKeyType="next"
          type="numeric"
          onSubmitEditing={() => dystolicRef.current?.focus()}
        />
        <Typography variant="subheading" style={styles.separator}>
          {" "}
          /{" "}
        </Typography>
        <Input
          id={"dystolicInput"}
          value={dystolic}
          onChangeText={(text) => setDystolic(text)}
          ref={dystolicRef}
          style={styles.input}
          placeholder="Ex: 8"
          type="numeric"
          returnKeyType="done" 
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
