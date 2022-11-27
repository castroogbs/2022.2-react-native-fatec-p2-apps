import React, { Component } from "react";
import { View, TextInput, Text, Pressable, Keyboard } from "react-native";
import { styles } from "./styles";
import { Picker } from "@react-native-picker/picker";
import api from "../../services/api";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 0,
      de: "",
      para: "",
      resultado: 0,
      moedas: [],
    };
    this.conversorDeMoedas = this.conversorDeMoedas.bind(this);
    this.pegaValor = this.pegaValor.bind(this);
  }

  async componentDidMount() {
    const response = await api.get(`json/last/USD-BRL,EUR-BRL,BTC-BRL`);
    console.log(response.data);
    this.setState({
      data: response.data,
      moedas: [],
    });
    this.setMoedas();
  }

  setMoedas() {
    const moedas = Object.entries(this.state.data).map(moeda => {
      const symbol = moeda[0];
      const infos = moeda[1];

      return {
        id: symbol,
        sigla: symbol.slice(0, 3),
        nome: infos.name.split("/")[0],
        cotacao: parseFloat(infos.ask),
        data_cotacao: infos.timestamp,
      };
    });
    moedas.push({
      id: "pt-BR",
      sigla: "BRL",
      nome: "Real Brasileiro",
      cotacao: 1,
      data_cotacao: "",
    });
    this.setState({ moedas });
  }

  pegaValor(valorAtual) {
    if (valorAtual.toString().indexOf(",") !== -1) {
      valorAtual = parseFloat(valorAtual.toString().replace(",", "."));
    }
    this.setState({ valor: valorAtual });
  }

  conversorDeMoedas() {
    let { valor, de, para } = this.state;
    de = this.state.moedas[de];
    para = this.state.moedas[para];

    let resultado = (de.cotacao * valor) / para.cotacao;

    this.setState({
      resultado: resultado.toLocaleString(para.id, {
        style: "currency",
        currency: para.sigla,
      }),
    });
    Keyboard.dismiss();
  }

  render() {
    let moedasItens = this.state.moedas.map((valor, chave) => {
      return <Picker.Item key={chave} value={chave} label={valor.nome} />;
    });

    return (
      <View>
        <Text>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Valor:"
          onChangeText={this.pegaValor}
          value={this.state.nome}
          keyboardType="numeric"
        />

        <Text>De:</Text>
        <Picker
          selectedValue={this.state.de}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ de: itemValue })
          }
        >
          <Picker.Item key={""} value={""} label={"Selecione"} />
          {moedasItens}
        </Picker>

        <Text>Para:</Text>
        <Picker
          selectedValue={this.state.para}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ para: itemValue })
          }
        >
          <Picker.Item key={""} value={""} label={"Selecione"} />
          {moedasItens}
        </Picker>

        <Pressable style={styles.botao} onPress={this.conversorDeMoedas}>
          <Text style={styles.textoBotao}>Converter</Text>
        </Pressable>

        <Text style={styles.tituloResultado}>Resultado:</Text>
        <Text style={styles.resultado}>{this.state.resultado}</Text>
      </View>
    );
  }
}

export default Form;
