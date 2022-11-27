import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, FlatList } from "react-native";
import * as SQLite from "expo-sqlite";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { styles } from "./src/styles/styles";

const db = SQLite.openDatabase("lista-compras.db");
const App = () => {
  const [produto, setProduto] = useState("");
  const [qtdProduto, setQtdProduto] = useState(0);
  const [listaCompras, setListaCompras] = useState([]);
  const createTables = () => {
    db.transaction((txn) => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS produtos (id INTEGER PRIMARY KEY AUTOINCREMENT, produto VARCHAR(30), quantidade INT)`,
        [],
        (sqlTxn, res) => {
          console.log("Tabela criada com sucesso!");
        },
        (error) => {
          console.log("error on creating table " + error.message);
        }
      );
    });
  };
  const incluirProduto = () => {
    if (produto == "" || qtdProduto == 0) {
      alert("Informe produto e quantidade válidos!");
      return false;
    }
    db.transaction((txn) => {
      txn.executeSql(
        `INSERT INTO produtos (produto, quantidade) VALUES (?,?)`,
        [produto, qtdProduto],
        (sqlTxn, res) => {
          console.log(`${produto} - ${qtdProduto} Produto adicionada com sucesso!`);
          getProdutos();
          setProduto("");
          setQtdProduto(0);
        },
        (error) => {
          console.log("Erro ao inserir um Produto " + error.message);
        }
      );
    });
  };

  const excluirProduto = (idProduto = null) => {
    if (!idProduto) {
      alert("Nâo foi possível deletar o produto desejado!");
      return false;
    }
    db.transaction((txn) => {
      txn.executeSql(
        `DELETE FROM produtos WHERE id = ?`,
        [idProduto],
        (sqlTxn, res) => {
          console.log(`Produto de id ${idProduto} removido com sucesso!`);
          getProdutos();
          setProduto("");
          setQtdProduto(0);
        },
        (error) => {
          console.log("Erro ao deletar uma Tarefa " + error.message);
        }
      );
    });
  };

  const getProdutos = () => {
    db.transaction((txn) => {
      txn.executeSql(
        `SELECT * FROM produtos ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log("Produtos lidos com sucesso!");
          let len = res.rows.length;
          if (len >= 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({
                id: item.id,
                nome: item.produto,
                qtd: item.quantidade,
              });
            }
            setListaCompras(results);
          }
        },
        (error) => {
          console.log("Erro ao obter Produtos " + error.message);
        }
      );
    });
  };

  const renderProduto = ({ item }) => {
    return (
      <View style={styles.containerTarefa}>
        <View style={styles.actionsContainer}>
          <Text style={{ marginRight: 9 }}>{item.qtd}</Text>
          <Text>{item.nome}</Text>
        </View>

        <Pressable onPress={() => excluirProduto(item.id)}>
          <FontAwesome name="trash" size={20} color="#eb4034" />
        </Pressable>
      </View>
    );
  };

  useEffect(() => {
    createTables();
    getProdutos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Compras:</Text>

      <View style={styles.actionsContainer}>
        <TextInput
          placeholder="Qtd:"
          value={qtdProduto}
          onChangeText={setQtdProduto}
          style={styles.input}
          keyboardType = 'numeric'
        />
        <TextInput
          placeholder="Produto"
          value={produto}
          onChangeText={setProduto}
          style={styles.input}
        />

        <Pressable
          onPress={incluirProduto}
          style={[styles.btn]}
        >
          <FontAwesome name="plus" size={10} color="#ffffff" />
        </Pressable>
      </View>

      <FlatList
        data={listaCompras}
        renderItem={renderProduto}
        key={(t) => t.id}
        style={styles.listarTarefas}
      />
    </View>
  );
};
export default App;
