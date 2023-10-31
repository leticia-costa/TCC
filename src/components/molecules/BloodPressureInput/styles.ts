import { StyleSheet } from "react-native";
import colors from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
      width: "100%",
      margin: 20,
    },
    labelContainer:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    label: {
      marginBottom: 10,
    },
    icon: {
      marginBottom: 10,
      color: colors.dark,
    },
    inputContainer: {
      width: "40%",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    separator: {
      alignSelf: "center",
      marginHorizontal: 10,
    },
    button: {
      marginTop: 12,
    },
  });
  