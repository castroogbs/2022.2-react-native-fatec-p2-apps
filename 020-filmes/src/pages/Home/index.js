import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator, FlatList } from "react-native";
import { styles } from "./styles";
import api from "../../../src/services/api.js";
import Filme from "../../components/Filme";

const Home = () => {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFilmes = async () => {
    const response = await api.get("r-api/?api=filmes");
    setFilmes(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getFilmes();
  }, []);

  if (loading) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <ActivityIndicator color="#09A6FF" size={40} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>App de Filmes</Text>

        <FlatList
          data={filmes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Filme data={item} />}
        />
      </View>
    );
  }
}
export default Home;