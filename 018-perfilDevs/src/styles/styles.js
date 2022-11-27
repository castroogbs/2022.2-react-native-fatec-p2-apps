import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginVertical: 40,
    flex: 1,
    display: "flex",
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
  input: {
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
  card: {
    width: "90%",
    marginHorizontal: 20,
    display: "flex",
    marginTop: 50
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20
  },
  imgDimensions: {
    width: 250, 
    height: 250
  }
});
export { styles };