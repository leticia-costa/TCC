import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/molecules/Header";
import MedicinesInfo from "../../components/molecules/MedicinesInfo";
import getMedicines from "../../../mocks/Medicines/getMedicines";
import { faPills } from "@fortawesome/free-solid-svg-icons";

const Medicines = () => {
  const medicines = getMedicines()

  const diaryMedicines = medicines.filter((medicine) => medicine.type === "normal")
  .map((item) => ({
    medicine: item.medicine,
    instruction: item.instruction,
  }));

  const highPreassureedicines = medicines.filter((medicine) => medicine.type === "high")
  .map((item) => ({
    medicine: item.medicine,
    instruction: item.instruction,
  }));

  return (
    <ScrollView>
      <View>
        <Header text="Medicação" goBack variant="dark" icon={faPills}/>
        <MedicinesInfo medicines={diaryMedicines} title="Medicação diária"/>
        <MedicinesInfo medicines={highPreassureedicines} title="Medicação para pressão alta" high/>
      </View>
    </ScrollView>
  );
};

export default Medicines;
