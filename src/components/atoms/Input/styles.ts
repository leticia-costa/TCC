import { StyleSheet } from "react-native";
import colors from "../../../utils/colors";

export const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    height: 90,
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginVertical: 6,
    borderColor: colors.gray,
    borderRadius: 15,
    borderWidth: 2,
  },
  input: {
    fontSize: 18,
  },
});
