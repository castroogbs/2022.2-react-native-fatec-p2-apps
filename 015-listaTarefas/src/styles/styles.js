import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginVertical: 40,
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  actionsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
    borderBottomWidth: 1,
    width: "100%",
    textAlign: "center",
    paddingBottom: 10,
    marginBottom: 20
  },
  inputTarefa: {
    width: "70%"
  },
  btn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#0095ff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5
  },
  listarTarefas: {
    width: "90%",
  },
  containerTarefa: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    marginTop: 15
  }
});
export { styles };