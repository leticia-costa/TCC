import { StyleSheet } from "react-native";
import colors from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
      width: "47%",
      height: 190,
      paddingVertical: 40,
      paddingHorizontal: 12,
      gap: 12,
      alignItems: "center",
      justifyContent: "center",
      elevation: 5,
      borderRadius: 15,
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
    },
    light: {
      backgroundColor: colors.white,
      color: colors.black,
    },
    dark: {
      backgroundColor: colors.dark,
      color: colors.white,
    },
    medium: {
      backgroundColor: colors.light,
      color: colors.black,
    },
    fullWidth: {
      width: "100%",
      height: 130,
    },
  });
  