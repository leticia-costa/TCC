import { StyleSheet } from "react-native";
import colors from "../../../utils/colors";

export const styles = StyleSheet.create({
  times: {
    display: "flex",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderBottomWidth: 1,
    borderColor: colors.dark,
  },
  datePicker: {},
  timeTexts: {
    justifyContent: "flex-end",
    gap: 4,
  },
  timeHour: {
    fontWeight: "900",
    fontSize: 18,
  },
  edit: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch", 
    flex: 1.
  },
  
  editButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  editButton: {
    shadowOpacity: 0,
    elevation: 1,
  },
  icon: {
    color: colors.dark,
  },
  hourInput:{
    minWidth: 120,
  },
});
