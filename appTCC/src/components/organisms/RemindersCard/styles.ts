import { StyleSheet } from "react-native";
import colors from "../../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 24,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
  },
  cardBody: {
    width: "100%",
  },
  text: {
    marginVertical: 16,
  },
  card: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingBottom: 12,
    borderRadius: 15,
    elevation: 5,
    shadowColor: colors.black,
    backgroundColor: colors.white,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  cardHeader: {
    paddingVertical: 20,
    paddingHorizontal: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  editButton: {
    shadowOpacity: 0,
    elevation: 1,
  },
  editButtonText: {
    fontWeight: "900",
    color: colors.dark,
  },
  icon: {
    color: colors.dark,
  },
  timeSection: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  timeSectionText: {
    alignSelf: "auto",
    color: colors.purple,
    backgroundColor: colors.white,
    marginLeft: 6,
    marginTop: 12,
    fontWeight: "500",
  },
  timeSectionDivisor: {
    flex: 1,
    borderTopWidth: 2,
    borderColor: colors.purple,
  },
  hourInput:{
    minWidth: 150,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    padding: 20,
    borderRadius: 16,
    gap: 8,
    backgroundColor: colors.white,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.dark,
    textAlign: "center",
    margin: 12,
  },
  modalText:{
    fontSize: 16,
    color: colors.purple,
  },
  modalInput:{
    width: 300,
    marginBottom: 16,
  },
  saveButton:{
    marginTop: 16,
  },
  cancelButton:{
    backgroundColor: colors.dark,
  }
});
