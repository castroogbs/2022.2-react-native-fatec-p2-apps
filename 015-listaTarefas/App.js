import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";
import * as SQLite from "expo-sqlite";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { styles } from "./src/styles/styles";

const db = SQLite.openDatabase("tarefas.db");
const App = () => {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const createTables = () => {
    db.transaction((txn) => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20))`,
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
  const incluirTarefa = () => {
    if (!tarefa) {
      alert("Informe uma tarefa");
      return false;
    }
    db.transaction((txn) => {
      txn.executeSql(
        `INSERT INTO tarefas (nome) VALUES (?)`,
        [tarefa],
        (sqlTxn, res) => {
          console.log(`${tarefa} Tarefa adicionada com sucesso!`);
          getTarefas();
          setTarefa("");
        },
        (error) => {
          console.log("Erro ao inserir uma Tarefa " + error.message);
        }
      );
    });
  };

  const excluirTarefa = (idTarefa = null) => {
    if (!idTarefa) {
      alert("Nâo foi possível deletar a tarefa desejada!");
      return false;
    }
    db.transaction((txn) => {
      txn.executeSql(
        `DELETE FROM tarefas WHERE id = ?`,
        [idTarefa],
        (sqlTxn, res) => {
          console.log(`${tarefa} Tarefa removida com sucesso!`);
          getTarefas();
        },
        (error) => {
          console.log("Erro ao deletar uma Tarefa " + error.message);
        }
      );
    });
  };

  const getTarefas = () => {
    db.transaction((txn) => {
      txn.executeSql(
        `SELECT * FROM tarefas ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log("Tarefas lidas com sucesso!");
          let len = res.rows.length;
          if (len >= 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome });
            }
            setTarefas(results);
          }
        },
        (error) => {
          console.log("Erro ao obter Tarefas " + error.message);
        }
      );
    });
  };

  const renderTarefa = ({ item }) => {
    return (
      <View style={styles.containerTarefa}>
        <View style={styles.actionsContainer}>
          <Text style={{ marginRight: 9 }}>{item.id}</Text>
          <Text>{item.nome}</Text>
        </View>
        
        <Pressable onPress={() => excluirTarefa(item.id)}>
          <FontAwesome name="trash" size={20} color="#eb4034" />
        </Pressable>
      </View>
    );
  };

  useEffect(() => {
    createTables();
    getTarefas();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas:</Text>

      <View style={styles.actionsContainer}>
        <TextInput
          placeholder="Informe uma tarefa"
          value={tarefa}
          onChangeText={setTarefa}
          style={styles.inputTarefa}
        />

        <Pressable
          onPress={incluirTarefa}
          style={[styles.actionsContainer, styles.btn]}
        >
          <Text style={{ color: "#ffffff", fontWeight: "bold" }}>Salvar </Text>
          <FontAwesome name="plus" size={20} color="#ffffff" />
        </Pressable>
      </View>

      <FlatList
        data={tarefas}
        renderItem={renderTarefa}
        key={(t) => t.id}
        style={styles.listarTarefas}
      />
    </View>
  );
};
export default App;
