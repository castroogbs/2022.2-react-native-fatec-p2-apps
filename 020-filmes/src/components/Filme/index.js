import React from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Filme = (props) => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container2}>
      <ScrollView>
        <View style={styles.linha}>
          <Text style={styles.tituloFilme}>{props.data.nome}</Text>
          <TouchableOpacity
            style={styles.linha2}
            onPress={() => {
              navigation.navigate("Sinopse", {
                sinopse: props.data.sinopse,
                nome: props.data.nome,
              });
            }}
          >
            <Text style={styles.texto}>Leia Mais </Text>
            <FontAwesome name={"arrow-right"} style={styles.texto} />
          </TouchableOpacity>
        </View>
        <Image source={{ uri: props.data.foto }} style={styles.imagem} />
      </ScrollView>
    </View>
  );
};
export default Filme;
