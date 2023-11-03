import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const HomeStyle = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    overflowY: "scroll",
  },
});

export const HomePreassure = StyleSheet.create({
  container: {
    width: "90%",
    height: "auto",
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginTop: -50,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});
