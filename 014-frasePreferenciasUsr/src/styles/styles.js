import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    margin: 40,
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
  },
  controlesContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    margin: 15,
  },
  control: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },
  containerFrase: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  frase: {
    fontSize: 20,
  },
  frasePequena: {
    fontSize: 5
  },
  containerClaro: {
    backgroundColor: "#ccc",
  },
  containerEscuro: {
    backgroundColor: "#717171",
  }
});
export { styles };
