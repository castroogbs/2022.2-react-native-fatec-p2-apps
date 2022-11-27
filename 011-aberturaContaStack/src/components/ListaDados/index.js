import React, { Component } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

class ListaDados extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text style={styles.titulo}>Dados informados</Text>
        <Text>Nome: {this.props.data.nome}</Text>
        <Text>Idade: {this.props.data.idade}</Text>
        <Text>Sexo: {this.props.data.sexo}</Text>
        <Text>Escolaridade: {this.props.data.escolaridade}</Text>
        <Text>Limite: R$ {this.props.data.limite.toFixed(2)}</Text>
        <Text>Brasileiro: {this.props.data.brasileiro ? "Sim" : "Não"}</Text>
      </View>
    );
  }
}

export default ListaDados;
