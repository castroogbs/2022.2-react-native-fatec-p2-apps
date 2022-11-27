import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

export default function Formacao() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formação</Text>

      <Text style={{ fontWeight: "bold" }}>Graduação:</Text>
      <Text style={{ marginBottom: 20 }}>
        Tecnologo em Sistemas para Internet
      </Text>
      
      <Text style={{ fontWeight: "bold" }}>Técnico:</Text>
      <Text style={{ marginBottom: 20 }}>
        Técnico em Logística Portuária
      </Text>

    </View>
  );
}
