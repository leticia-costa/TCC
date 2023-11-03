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

interface RemindersCardProps {
  style?: StyleProp<TextStyle>;
}

const RemindersCard: React.FC<RemindersCardProps> = ({ style }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <ScrollView>
      <View style={[styles.container, style]}>
        <Typography variant="subheading" style={styles.text}>
          Criados por você
        </Typography>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <TouchableOpacity style={styles.editButton}>
              <Typography style={styles.editButtonText}>Editar</Typography>
            </TouchableOpacity>
            <TouchableOpacity style={styles.editButton}>
              <FontAwesomeIcon
                icon={faPlusCircle}
                style={styles.icon}
                size={35}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.timeSection}>
            <Typography style={styles.timeSectionText} variant="subheading">
              Medicação
            </Typography>
            <View style={styles.timeSectionDivisor} />
          </View>

          <View style={styles.times}>
            <View style={styles.timeTexts}>
              <Typography>Captopril 25mg 1cp</Typography>
              <Typography style={styles.timeHour}>12:00</Typography>
            </View>
            <Switch
              trackColor={{ false: colors.gray, true: colors.dark }}
              thumbColor={isEnabled ? colors.light : colors.lightGray}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.times}>
            <View style={styles.timeTexts}>
              <Typography>Bravan 320mg 1cp</Typography>
              <Typography style={styles.timeHour}>19:00</Typography>
            </View>
            <Switch
              trackColor={{ false: colors.gray, true: colors.dark }}
              thumbColor={isEnabled ? colors.light : colors.lightGray}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.timeSection}>
            <Typography style={styles.timeSectionText} variant="subheading">
              Pressão
            </Typography>
            <View style={styles.timeSectionDivisor} />
          </View>

          <View style={styles.times}>
            <View style={styles.timeTexts}>
              <Typography>Monitoramento</Typography>
              <Typography style={styles.timeHour}>09:00</Typography>
            </View>
            <Switch
              trackColor={{ false: colors.gray, true: colors.dark }}
              thumbColor={isEnabled ? colors.light : colors.lightGray}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.times}>
            <View style={styles.timeTexts}>
              <Typography>Monitoramento</Typography>
              <Typography style={styles.timeHour}>15:00</Typography>
            </View>
            <Switch
              trackColor={{ false: colors.gray, true: colors.dark }}
              thumbColor={isEnabled ? colors.light : colors.lightGray}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.times}>
            <View style={styles.timeTexts}>
              <Typography>Monitoramentop</Typography>
              <Typography style={styles.timeHour}>20:30</Typography>
            </View>
            <Switch
              trackColor={{ false: colors.gray, true: colors.dark }}
              thumbColor={isEnabled ? colors.light : colors.lightGray}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RemindersCard;
