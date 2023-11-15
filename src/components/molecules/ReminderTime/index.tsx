import React, { useEffect, useState } from "react";
import {
  StyleProp,
  TextStyle,
  View,
  Switch,
  TouchableOpacity,
  Platform,
} from "react-native";
import { styles } from "./styles";
import Typography from "../../atoms/Typography";
import colors from "../../../utils/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import Input from "../../atoms/Input";
import DatePicker from "react-native-date-picker";
import * as Notifications from "expo-notifications";

import Button from "../../atoms/Button";
import handleNotification, {
  Notification,
} from "../../../utils/handleNotification";
interface ReminderTimeProps {
  edit: boolean;
  description: string;
  body: string;
  title: string;
  hour: string;
  status: boolean;
}

const ReminderTime: React.FC<ReminderTimeProps> = ({
  edit,
  title,
  description,
  hour,
  body,
  status,
}) => {
  const [date, setDate] = useState(new Date());
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

  return (
    <View style={styles.times}>
      {!edit ? (
        <View style={styles.timeTexts}>
          <Typography>{description}</Typography>
          <Typography style={styles.timeHour}>{hour}</Typography>
        </View>
      ) : (
        <View style={styles.edit}>
          <Input type={"default"} value={description} />
          <View style={styles.editButtons}>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => setOpen(true)}
            >
              <Input type={"numeric"} value={hour} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.editButton}>
              <FontAwesomeIcon icon={faTrash} style={styles.icon} size={40} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.editButton}>
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={styles.icon}
                color="green"
                size={40}
              />
            </TouchableOpacity>
          </View>

          {/* <DatePicker
            mode="time"
            modal
            open={open}
            date={date}
            onConfirm={(date) => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          /> */}
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
