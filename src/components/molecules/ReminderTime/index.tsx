import React, { useState } from "react";
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

interface ReminderTimeProps {
  edit: boolean;
  description: string;
  hour: string;
}

const ReminderTime: React.FC<ReminderTimeProps> = ({
  edit,
  description,
  hour,
}) => {
  // const [showTimePicker, setShowTimePicker] = useState(false);
  // const [selectedTime, setSelectedTime] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  // const onTimeChange = (event, selected) => {
  //   if (selected) {
  //     setSelectedTime(selected);
  //     setShowTimePicker(Platform.OS === "ios");
  //   }
  // };

  // const setToNoon = () => {
  //   const noon = new Date();
  //   noon.setHours(12);
  //   noon.setMinutes(0);
  //   setSelectedTime(noon);
  //   setShowTimePicker(Platform.OS === "ios");
  // };

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
