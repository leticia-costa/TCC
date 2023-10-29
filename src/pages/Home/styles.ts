import { StyleSheet } from "react-native";

export const HomeStyle = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

export const HomeHeader = StyleSheet.create({
  container: {
    width: "100%",
    height: 250,
    paddingVertical: 50,
    paddingHorizontal: 24,
    backgroundColor: "#DB1E00",
    alignItems: "flex-start",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});

export const HomePreassure = StyleSheet.create({
  container: {
    width: "90%",
    height: "auto",
    paddingVertical: 24,
    paddingHorizontal: 24,
    marginTop: -50,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
    elevation: 5,
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});

export const Input = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    paddingHorizontal: 10, 
    borderColor: "#828B99",
    borderRadius: 15,
    borderWidth: 2,
  },
});
