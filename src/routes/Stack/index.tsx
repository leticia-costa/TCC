import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../pages/Home";
import Reminders from "../../pages/Reminders";
import Medicines from "../../pages/Medicines";
import Recommendations from "../../pages/Recommendations";

const { Navigator, Screen } = createNativeStackNavigator();

export default function Stack() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
      <Screen name="Medicines" component={Medicines} />
      <Screen name="Recommendations" component={Recommendations} />
      <Screen name="Reminders" component={Reminders} />
    </Navigator>
  );
}
