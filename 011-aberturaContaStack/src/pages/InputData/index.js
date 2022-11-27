import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import ListaDados from "../../components/ListaDados"

export default class InputData extends Component {
    constructor(props) {
        super(props);
      }

    render() {
        return (
            <View style={styles.container}>
              <ListaDados data={this.props.route.params?.infosUsuario}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
  });