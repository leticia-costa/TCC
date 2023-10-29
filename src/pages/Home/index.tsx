import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { HomeHeader, HomePreassure, HomeStyle, Input } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { propStack } from "../../routes/Stack/Models";

const Home = () => {
  const navigation = useNavigation<propStack>();

  return (
    <View style={HomeStyle.container}>
      <View style={HomeHeader.container}>
        <Text>Olá, paciente!</Text>
      </View>
      <View style={HomePreassure.container}>
        <Text>Pressão</Text>
        <TextInput
          style={Input.container}
          // onChangeText={(text) => this.setState({ text })}
          // value={this.state.text}
          placeholder="Digite aqui"
        ></TextInput>
      </View>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login", { name: "a" })}
      >
        {/* <Text>Login</Text> */}
      </TouchableOpacity>
    </View>
  );
};

export default Home;
