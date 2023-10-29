import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { LoginStyle } from "./styles";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={LoginStyle.container}>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
