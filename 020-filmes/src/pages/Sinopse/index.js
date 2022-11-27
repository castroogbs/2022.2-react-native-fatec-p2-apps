import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles"
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Sinopse = ({ route }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App de Filmes</Text>

      <View>
        <Text style={styles.tituloFilme}>{route.params?.nome}</Text>
        <Text style={styles.texto}>Sinopse: {route.params?.sinopse}</Text>
      </View>

      <TouchableOpacity
        style={styles.linha2}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <FontAwesome name={"arrow-left"} style={{color:"#fff"}}/>
        <Text style={[styles.texto, { color: "#fff" }]}>voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Sinopse;