import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    overflowY: "scroll",
  },
  reminder:{
    width: '100%',
  }
});
