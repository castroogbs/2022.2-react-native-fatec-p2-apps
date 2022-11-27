import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Form from "./src/components/Form";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={ styles.titulo }>Conversor de Moedas</Text>
          <Text style={ styles.titulo }>Dólar, Real e Euro</Text>
          <Form />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  titulo: {
    color: "red",
    marginBottom: 10,
    fontSize: 30
  },
});

export default App;
