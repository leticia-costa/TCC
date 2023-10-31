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

export const HomeHeader = StyleSheet.create({
  container: {
    width: "100%",
    height: 250,
    display: "flex",
    flexDirection: "row",
    paddingVertical: 50,
    paddingHorizontal: 24,
    gap: 12,
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "flex-start",
    elevation: 5,
    shadowColor: colors.light,
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
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

export const HomeOptions = StyleSheet.create({
  container: {
    width: "90%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 0,
    marginTop: 12,
  },
});

export const Cards = StyleSheet.create({
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
  lightCard: {
    backgroundColor: colors.white,
    color: colors.black,
  },
  darkCard: {
    backgroundColor: colors.dark,
    color: colors.white,
  },
  mediumCard: {
    backgroundColor: colors.light,
    color: colors.black,
  },
  fullWidth: {
    width: "100%",
    height: 130,
  },
});
