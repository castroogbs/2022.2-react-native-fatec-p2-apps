import React, { Component } from "react";
import { View, TextInput, Text, Switch, Pressable } from "react-native";
import { styles } from "./styles";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infosUsuario: {},
      nome: "",
      idade: 0,
      sexo: "",
      escolaridade: "",
      niveisEscolaridade: [
        { grau: "Fundamental Incompleto" },
        { grau: "Fundamental Completo" },
        { grau: "Médio Incompleto" },
        { grau: "Médio Completo" },
        { grau: "Superior Incompleto" },
        { grau: "Superior Completo" },
      ],
      limite: 0,
      ehBrasileiro: false,
    };
    this.capturarDados = this.capturarDados.bind(this);
  }

  irParaInputData(){
    this.props.navigation.navigate('InputData', {infosUsuario: this.state.infosUsuario})
  }

  capturarDados() {
    let { nome, idade, sexo, escolaridade, limite, ehBrasileiro } = this.state;
    escolaridade = this.state.niveisEscolaridade[escolaridade].grau
    this.setState({ infosUsuario: { nome, idade, sexo, escolaridade, limite, ehBrasileiro } });
    setTimeout(() => this.irParaInputData(), 500) // "resolver bug no state"
  }

  render() {
    let niveisEscolaridadeItem = this.state.niveisEscolaridade.map(
      (valor, chave) => {
        return <Picker.Item key={chave} value={chave} label={valor.grau} />;
      }
    );

    return (
      <View>
        <Text>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome:"
          onChangeText={(nomeAtual) => this.setState({ nome: nomeAtual })}
          value={this.state.nome}
        />

        <Text> Idade: </Text>
        <TextInput
          style={styles.input}
          placeholder="Idade:"
          onChangeText={(idadeAtual) => this.setState({ idade: idadeAtual })}
          value={this.state.idade}
        />

        <Text>Sexo:</Text>
        <Picker
          selectedValue={this.state.sexo}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ sexo: itemValue })
          }
        >
          <Picker.Item key={""} value={""} label={"Selecione"} />
          <Picker.Item key={"M"} value={"M"} label={"Masculino"} />
          <Picker.Item key={"F"} value={"F"} label={"Feminino"} />
        </Picker>

        <Text>Escolaridade:</Text>
        <Picker
          selectedValue={this.state.escolaridade}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ escolaridade: itemValue })
          }
        >
          <Picker.Item key={""} value={""} label={"Selecione"} />
          {niveisEscolaridadeItem}
        </Picker>

        <Text>Limite:</Text>
        <Slider
          minimumValue={0}
          maximumValue={1000}
          onValueChange={(valorSelecionado) =>
            this.setState({ limite: valorSelecionado })
          }
          value={this.state.limite}
        />

        <Text>Brasileiro:</Text>
        <Switch
          value={this.state.ehBrasileiro}
          onValueChange={(valorSwitch) =>
            this.setState({ ehBrasileiro: valorSwitch })
          }
        />

        <Pressable
          style={styles.botao}
          onPress={this.capturarDados}
        >
          <Text style={styles.textoBotao}>
            Enviar
          </Text>
        </Pressable>
      </View>
    );
  }
}

export default Form;
