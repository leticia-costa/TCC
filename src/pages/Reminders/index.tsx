import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/molecules/Header";
import { styles } from "./styles";
import RemindersCard from "../../components/organisms/RemindersCard";

const Reminders = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header text="Lembretes" size="medium" variant="dark" goBack />
        <RemindersCard />

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Reminders</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Reminders;
