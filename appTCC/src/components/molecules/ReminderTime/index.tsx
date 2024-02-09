import React, { useEffect, useState } from "react";
import { View, Switch, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Typography from "../../atoms/Typography";
import colors from "../../../utils/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Input from "../../atoms/Input";
import * as Notifications from "expo-notifications";
import postReminders from "../../../../mocks/Reminders/postReminders";

import handleNotification, {
  Notification,
} from "../../../utils/handleNotification";
interface ReminderTimeProps {
  edit: boolean;
  description: string;
  type: "medicine" | "preassure";
  body: string;
  title: string;
  hour: string;
  status: boolean;
  index: number;
  setEdit: (v: boolean) => void;
}

const ReminderTime: React.FC<ReminderTimeProps> = ({
  edit,
  title,
  description,
  hour,
  body,
  status,
  index,
  type,
  setEdit,
}) => {
  const [date, setDate] = useState<string>(hour);
  const [open, setOpen] = useState(false);
  const [isEnabled, setIsEnabled] = useState(status);

  useEffect(() => {
    (async () => {
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        if (status !== "granted") {
          alert("Permissão para notificações não concedida!");
          return;
        }
      }

      const tokenData = await Notifications.getExpoPushTokenAsync();
      const expoPushToken = tokenData.data;
    })();
  }, []);

  const partes = hour.split(":");

  const hourFormated = parseInt(partes[0], 10);
  const minutesFormated = parseInt(partes[1], 10);

  const notificationAtributes: Notification = {
    title: title,
    body: body,
    hour: hourFormated,
    minute: minutesFormated,
  };

  useEffect(() => {
    if (isEnabled) {
      handleNotification(notificationAtributes);
    }
  }, []);

  const handleSUbmitEdit = () => {
    const data = {
      type: type,
      hour: date,
      description: description,
      status: status,
    };
    console.log(data, index);
    postReminders(data, index);
    setEdit(false);
  };

  return (
    <View style={styles.times}>
      {!edit ? (
        <View style={styles.timeTexts}>
          <Typography>{description}</Typography>
          <Typography style={styles.timeHour}>{hour}</Typography>
        </View>
      ) : (
        <View style={styles.edit}>
          <Typography>{description}</Typography>
          <View style={styles.editButtons}>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => setOpen(true)}
            >
              <Input
                type={"default"}
                value={date}
                onChangeText={(text) => setDate(text)}
                style={styles.hourInput}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => handleSUbmitEdit()}
            >
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={styles.icon}
                color="green"
                size={40}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}

      {!edit && (
        <Switch
          trackColor={{ false: colors.gray, true: colors.dark }}
          thumbColor={isEnabled ? colors.light : colors.lightGray}
          onValueChange={() => setIsEnabled((prevState) => !prevState)}
          value={isEnabled}
        />
      )}
    </View>
  );
};

export default ReminderTime;
