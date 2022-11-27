import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#222",
    textAlign: "center",
    marginBottom: 20,
    paddingVertical: 10,
    width: 250,
  },
  botao: {
    borderWidth: 1,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "lightblue",
    marginBottom: 20,
    marginTop: 20
  },
  textoBotao: {
    fontSize: 25,
    padding: 5,
    color: "lightblue"
  },
  tituloResultado: {
    textAlign: "center",
    color: "green",
    fontSize: 20,
    marginBottom: 10
  },
  resultado:{
    textAlign: "center",
    fontWeight: "bold"
  }
});
export { styles };
