import { StyleSheet } from "react-native";
import colors from "../../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingVertical: 50,
    paddingHorizontal: 24,
    gap: 12,
    alignItems: "center",
    justifyContent: "flex-start",
    elevation: 5,
    shadowColor: colors.gray,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  align:{
    display: 'flex',
    flexDirection: "row",
    gap: 16,
    alignItems: 'center'
  },
  default: {
    backgroundColor: colors.light,
    color: colors.purple,
  },
  dark: {
    backgroundColor: colors.purple,
    color: colors.white,
  },
  light: {
    backgroundColor: colors.white,
    color: colors.dark,
  },
  small: {
    height: 150,
    alignItems: "flex-end",
  },
  medium: {
    height: 200,
    alignItems: "flex-end",
  },
  big: {
    height: 250,
  }
});
