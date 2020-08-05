import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export default class ScreenChooseMaterial extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          backgroundColor: "#b0cac7",
        }}
      >
        <TouchableHighlight
          style={{
            backgroundColor: "#005086",
            padding: 8,
            borderRadius: 8,
            width: 150,
            margin: 10,
          }}
          onPress={() =>
            this.props.navigation.navigate("ScreenChooseThickness")
          }
        >
          <Text style={{ color: "white" }}>Aluminium</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={{
            backgroundColor: "#005086",
            padding: 8,
            borderRadius: 8,
            width: 150,
            margin: 10,
          }}
          onPress={() =>
            this.props.navigation.navigate("ScreenChooseThickness")
          }
        >
          <Text style={{ color: "white" }}>Stainless Steel</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={{
            backgroundColor: "#005086",
            padding: 8,
            borderRadius: 8,
            width: 150,
            margin: 10,
          }}
          onPress={() =>
            this.props.navigation.navigate("ScreenChooseThickness")
          }
        >
          <Text style={{ color: "white" }}>Steel</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttons: {
    backgroundColor: "#318fb5",
    margin: 40,
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
  },
});
