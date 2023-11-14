import React, { useState } from "react";
import {
  Text,
  StyleProp,
  TextStyle,
  View,
  TouchableOpacity,
  Switch,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import colors, { ColorProp } from "../../../utils/colors";
import Typography from "../../atoms/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import ReminderTime from "../../molecules/ReminderTime";
import getReminders from "../../../../mocks/Reminders/getReminders";
interface RemindersCardProps {
  style?: StyleProp<TextStyle>;
}

const RemindersCard: React.FC<RemindersCardProps> = ({ style }) => {
  const [edit, setEdit] = useState(false);

  const reminders = getReminders();

  const preassureRecominders = reminders
    .filter((reminder) => reminder.type === "preassure")
    .map((reminderPreassure) => ({
      description: reminderPreassure.description,
      hour: reminderPreassure.hour,
    }));

  const medicineRecominders = reminders
    .filter((reminder) => reminder.type === "medicine")
    .map((reminderMedicine) => ({
      description: reminderMedicine.description,
      hour: reminderMedicine.hour,
    }));

  return (
    <ScrollView>
      <View style={[styles.container, style]}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => setEdit((prevState) => !prevState)}
            >
              <Typography style={styles.editButtonText}>
                {!edit ? "Editar" : "Cancelar"}
              </Typography>
            </TouchableOpacity>
            <TouchableOpacity style={styles.editButton}>
              <FontAwesomeIcon
                icon={faPlusCircle}
                style={styles.icon}
                size={35}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.cardBody}>
            <View style={styles.timeSection}>
              <Typography style={styles.timeSectionText} variant="subheading">
                Medicação
              </Typography>
              <View style={styles.timeSectionDivisor} />
            </View>

            {medicineRecominders.map((reminder) => (
              <ReminderTime
                description={reminder.description}
                hour={reminder.hour}
                edit={edit}
              />
            ))}
          </View>
          <View style={styles.cardBody}>
            <View style={styles.timeSection}>
              <Typography style={styles.timeSectionText} variant="subheading">
                Pressão
              </Typography>
              <View style={styles.timeSectionDivisor} />
            </View>

            {preassureRecominders.map((reminder) => (
              <ReminderTime
                description={reminder.description}
                hour={reminder.hour}
                edit={edit}
              />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RemindersCard;
