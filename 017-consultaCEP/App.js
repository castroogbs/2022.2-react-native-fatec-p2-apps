import React, { Component } from "react";
import { View, Text, TextInput, FlatList, Pressable } from "react-native";
import api from "./src/services/api";
import { styles } from "./src/styles/styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cep: 0,
      endereco: [],
    };
    this.consultar = this.consultar.bind(this);
  }

  async consultar() {
    let cep = this.state.cep;
    
    if (!cep || cep.length < 8) {
      alert("Digite um cep válido para consultar o endereço!");
      return false;
    }

    const response = await api.get(`ws/${cep}/json`);
    this.setState({
      endereco: response.data,
    });
    console.log(this.state.endereco);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cep x Endereço:</Text>

        <View style={styles.actionsContainer}>
          <TextInput
            placeholder="Digite o CEP:"
            value={this.state.cep}
            onChangeText={(cep) => this.setState({ cep: cep })}
            style={styles.input}
            keyboardType = 'numeric'
          />

          <Pressable
            onPress={this.consultar}
            style={[styles.actionsContainer, styles.btn]}
          >
            <FontAwesome name="check" size={20} color="#ffffff" />
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.titulo}>CEP: {this.state.endereco.cep}</Text>
          <Text style={styles.descricao}>Logradouro: {this.state.endereco.logradouro}</Text>
          <Text style={styles.descricao}>Bairro: {this.state.endereco.bairro}</Text>
          <Text style={styles.descricao}>Cidade: {this.state.endereco.localidade}</Text>
          <Text style={styles.descricao}>Estado: {this.state.endereco.uf}</Text>
        </View>
      </View>
    );
  }
}
export default App;
