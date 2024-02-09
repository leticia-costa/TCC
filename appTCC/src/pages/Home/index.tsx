import React, {  } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { HomePreassure, HomeStyle } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { propStack } from "../../routes/Stack/Models";
import BloodPressureInput from "../../components/molecules/BloodPressureInput";
import CardsHome from "../../components/organisms/CardsHome";
import Header from "../../components/molecules/Header";

const Home = () => {
  const navigation = useNavigation<propStack>();

  return (
    <ScrollView>
      <View style={HomeStyle.container}>

        <Header text={"Olá, paciente!"} size="big" variant="dark"/>
        <View style={HomePreassure.container}>
          <BloodPressureInput />
        </View>

        <CardsHome />
      </View>
    </ScrollView>
  );
};

export default Home;
