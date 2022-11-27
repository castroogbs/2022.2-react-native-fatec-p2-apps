import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Form from "../../components/Form"

export default class Home extends Component {
    constructor(props) {
        super(props);
      }

    render() {
        return (
            <View style={styles.container}>
              <Form navigation={this.props.navigation} />
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