import React, { useState } from "react";
import {
  Text,
  StyleProp,
  TextStyle,
  View,
  TouchableOpacity,
  Switch,
  ScrollView,
  Modal,
  TextInput,
} from "react-native";
import { styles } from "./styles";
import colors, { ColorProp } from "../../../utils/colors";
import Typography from "../../atoms/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import ReminderTime from "../../molecules/ReminderTime";
import getReminders from "../../../../mocks/Reminders/getReminders";
import Button from "../../atoms/Button";
import postReminders from "../../../../mocks/Reminders/postReminders";
import Input from "../../atoms/Input";
interface RemindersCardProps {
  style?: StyleProp<TextStyle>;
}

const RemindersCard: React.FC<RemindersCardProps> = ({ style }) => {
  const [edit, setEdit] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [hour, setHour] = useState("");
  const [description, setDesctiption] = useState("");
  const [type, setType] = useState<"medicine" | "preassure">("preassure");

  const reminders = getReminders();
  const remindersWithIndex = reminders.map((reminder, index) => ({
    ...reminder,
    reminderIndex: index,
  }));

  const preassureRecominders = remindersWithIndex
    .filter((reminder) => reminder.type === "preassure")
    .map((reminderPreassure) => ({
      ...reminderPreassure,
    }));

  const medicineRecominders = remindersWithIndex
    .filter((reminder) => reminder.type === "medicine")
    .map((reminderMedicine) => ({
      ...reminderMedicine,
    }));

  const handleSave = () => {
    const data = {
      type: type,
      hour: hour,
      description: description,
      status: true,
    };
    postReminders(data);
    setModalVisible(false);
    setHour("");
    setDesctiption("");
    setType("preassure");
  };

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
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => setModalVisible(true)}
            >
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
                title={"Medicação"}
                body={`Tome seu ${reminder.description}. Não se esqueça de cuidar de você! É hora de tomar sua medicação. Sua saúde agradece!`}
                description={reminder.description}
                hour={reminder.hour}
                edit={edit}
                status={reminder.status}
                type={reminder.type}
                index={reminder.reminderIndex}
                setEdit={setEdit}
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
                title={"Monitorar pessão"}
                body={
                  "Lembre-se de cuidar do seu coração! Tire alguns minutos para monitorar sua pressão arterial hoje. Sua saúde merece toda atenção. É fácil, rápido e faz toda a diferença!"
                }
                description={reminder.description}
                hour={reminder.hour}
                edit={edit}
                status={reminder.status}
                type={reminder.type}
                index={reminder.reminderIndex}
                setEdit={setEdit}
              />
            ))}
          </View>
        </View>
      </View>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Typography style={styles.modalTitle} variant="subheading">
              Criar lembrete
            </Typography>
            <Typography style={styles.modalText} variant="subheading">
              Insira a hora:
            </Typography>
            <Input
              type="default"
              value={hour}
              onChangeText={(text) => setHour(text)}
              placeholder="08:00"
              style={styles.hourInput}
            />
            <Typography style={styles.modalText} variant="subheading">
              Insira a descrição:
            </Typography>
            <Input
              type="default"
              value={description}
              onChangeText={(text) => setDesctiption(text)}
              placeholder="Medição"
              style={styles.modalInput}
            />
            <TouchableOpacity onPress={() => setType("medicine")}>
              <Typography style={styles.timeSectionText}>
                {type === "medicine" ? "⚫" : "⚪"} Medicação
              </Typography>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setType("preassure")}>
              <Typography style={styles.timeSectionText}>
                {type === "preassure" ? "⚫" : "⚪"} Monitorar pressão
              </Typography>
            </TouchableOpacity>
            <Button
              label={"Salvar"}
              style={styles.saveButton}
              onPress={handleSave}
            />
            <Button
              label={"Cancelar"}
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default RemindersCard;
