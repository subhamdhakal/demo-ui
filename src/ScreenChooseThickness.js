import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export default class ScreenChooseThickness extends Component {
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
            width: 200,
            margin: 10,
          }}
          onPress={() => this.props.navigation.navigate("DetailScreen")}
        >
          <Text style={{ color: "white" }}>1/2" and Up (12.7 mm) </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={{
            backgroundColor: "#005086",
            padding: 8,
            borderRadius: 8,
            width: 200,
            margin: 10,
          }}
          onPress={() => this.props.navigation.navigate("DetailScreen")}
        >
          <Text style={{ color: "white" }}>1/4" (6.4 mm)</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={{
            backgroundColor: "#005086",
            padding: 8,
            borderRadius: 8,
            width: 200,
            margin: 10,
          }}
          onPress={() => this.props.navigation.navigate("DetailScreen")}
        >
          <Text style={{ color: "white" }}>1/8" (3.2 mm)</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={{
            backgroundColor: "#005086",
            padding: 8,
            borderRadius: 8,
            width: 200,
            margin: 10,
          }}
          onPress={() => this.props.navigation.navigate("DetailScreen")}
        >
          <Text style={{ color: "white" }}>3/16" (4.8 mm)</Text>
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
