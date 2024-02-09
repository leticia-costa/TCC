// import { StatusBar } from "expo-status-bar";
import React from "react";
import Routes from "./routes";
import * as Notifications from "expo-notifications"

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  return <Routes />;
}
