import React, { Component } from "react";
import { Text, View, Switch } from "react-native";
import { styles } from "./src/styles/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dia: true,
      pequeno: true,
    };
  }

  // Quando o componente é montado em tela (quando abrimos o App)
  async componentDidMount() {
    let data = {}
    await AsyncStorage.getItem("pequeno").then((value) => {
      data.pequeno = value;
    });

    await AsyncStorage.getItem("dia").then((value) => {
      data.dia = value;
    });

    console.log(data)

    this.setState({ 
      pequeno: data.pequeno === "true" ? true : false,
      dia: data.dia === "true" ? true : false 
    });

    console.log(this.state)
  }

  // Toda vez que um state é atualizado
  async componentDidUpdate(_, prevState) {
    AsyncStorage.setItem("pequeno", this.state.pequeno ? "true" : "false");
    AsyncStorage.setItem("dia", this.state.dia ? "true" : "false");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Frases</Text>
        
        <View style={styles.controlesContainer}>
          <View style={styles.control}>
            <Text>Dia:</Text>
            <Switch
              value={this.state.dia}
              onValueChange={(valorSwitch) =>
                this.setState({
                  dia: valorSwitch
                })
              }
            />
          </View>

          <View style={styles.control}>
            <Text>Pequeno:</Text>
            <Switch
              value={this.state.pequeno}
              onValueChange={(valorSwitch) =>
                this.setState({
                  pequeno: valorSwitch
                })
              }
            />
          </View>
        </View>
        
        <View style={[styles.containerFrase, this.state.dia ? styles.containerClaro : styles.containerEscuro]}>
          <Text style={this.state.pequeno ? styles.frasePequena : styles.frase}>"A vingança nunca é plena, mata a alma e envenena."</Text>
          <Text style={this.state.pequeno ? styles.frasePequena : styles.frase}>(Seu Madruga)</Text>
        </View>
      </View>
    );
  }
}
