import React, { Component } from "react";
import { View, Text, TextInput, Image, Pressable, Keyboard } from "react-native";
import api from "./src/services/api";
import { styles } from "./src/styles/styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 0,
      data: [],
    };
    this.consultar = this.consultar.bind(this);
  }

  async consultar() {
    let username = this.state.username;
    
    if (!username) {
      alert("Digite um username para consultar as informações!");
      return false;
    }

    const response = await api.get(`${username}`);
    this.setState({
      data: response.data,
    });
    console.log(this.state.data);
    Keyboard.dismiss();
  }

  dateFormatter(date="") {
    return date.slice(0,10).split('-').reverse().join('/');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Perfil dos Devs:</Text>

        <View style={styles.imageContainer}>
          <Image
            source={{ uri: this.state.data.avatar_url }}
            style={styles.imgDimensions}
          />
        </View>

        <View style={styles.actionsContainer}>
          <TextInput
            placeholder="Digite o username:"
            value={this.state.username}
            onChangeText={(username) => this.setState({ username: username })}
            style={styles.input}
          />

          <Pressable
            onPress={this.consultar}
            style={[styles.actionsContainer, styles.btn]}
          >
            <FontAwesome name="check" size={20} color="#ffffff" />
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.titulo}>Id: {this.state.data.id}</Text>
          <Text style={styles.descricao}>Nome: {this.state.data.name}</Text>
          <Text style={styles.descricao}>Repositórios: {this.state.data.public_repos}</Text>
          <Text style={styles.descricao}>Criado em: {this.dateFormatter(this.state.data.created_at)}</Text>
          <Text style={styles.descricao}>Seguidores: {this.state.data.followers}</Text>
          <Text style={styles.descricao}>Seguindo: {this.state.data.following}</Text>
        </View>
      </View>
    );
  }
}
export default App;
