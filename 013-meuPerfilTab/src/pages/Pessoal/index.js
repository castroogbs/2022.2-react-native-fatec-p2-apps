import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

export default function Pessoal() {
  const navigation = useNavigation();
  let img = "https://avatars.githubusercontent.com/u/50057372?v=4";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pessoal</Text>
      <Image
        source={{ uri: img }}
        style={styles.img}
      />

      <Text style={{ fontWeight: "bold" }}>Dados Pessoais:</Text>
      <Text style={{ marginBottom: 20 }}>
        Gabriel Castro - Software Developer
      </Text>

    </View>
  );
}
