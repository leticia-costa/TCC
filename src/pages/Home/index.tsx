import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import {
  Cards,
  HomeHeader,
  HomeOptions,
  HomePreassure,
  HomeStyle,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { propStack } from "../../routes/Stack/Models";
import BloodPressureInput from "../../components/molecules/BloodPressureInput";
import Typography from "../../components/atoms/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBell,
  faCapsules,
  faCircleInfo,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import CardsHome from "../../components/organisms/CardsHome";

const Home = () => {
  const navigation = useNavigation<propStack>();

  return (
    <ScrollView>
      <View style={HomeStyle.container}>
        <View style={HomeHeader.container}>
          <Image
            source={require("../../assets/images/logo-light.png")}
            style={{ width: 60, height: 60 }}
          />
          <Typography>Olá, paciente!</Typography>
        </View>
        <View style={HomePreassure.container}>
          <BloodPressureInput />
        </View>

        <CardsHome/>
        <Text>Home</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Login", { name: "a" })}
        >
          {/* <Text>Login</Text> */}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;
