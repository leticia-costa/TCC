import { StyleSheet } from "react-native";
import colors from "../../../utils/colors";

export const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    gap: 12,
    backgroundColor: colors.purple,
    padding: 10,
    borderRadius: 15,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
  icon: {
    color: colors.white,
    fontSize: 18,
  }
});
