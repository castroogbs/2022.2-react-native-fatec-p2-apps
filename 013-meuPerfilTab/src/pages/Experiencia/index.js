import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

export default function Experiencia() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência</Text>

      <Text style={{ fontWeight: "bold" }}>Experiência:</Text>
      <Text style={{ marginBottom: 20 }}>FullStack PHP</Text>

      <Text style={{ fontWeight: "bold" }}>Projetos (GitHub):</Text>
      <Text style={{ marginBottom: 20 }}>
        https://github.com/castroogbs
      </Text>
    </View>
  );
}
