import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#b0cac7",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View>
            <TouchableHighlight
              style={styles.buttons}
              onPress={() =>
                this.props.navigation.navigate("ScreenChooseMaterial")
              }
            >
              <Text style={styles.buttonText}>MIG</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.buttons}
              onPress={() =>
                this.props.navigation.navigate("ScreenChooseMaterial")
              }
            >
              <Text style={styles.buttonText}>MIG</Text>
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight
              style={styles.buttons}
              onPress={() =>
                this.props.navigation.navigate("ScreenChooseMaterial")
              }
            >
              <Text style={styles.buttonText}>STICK</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.buttons}
              onPress={() =>
                this.props.navigation.navigate("ScreenChooseMaterial")
              }
            >
              <Text style={styles.buttonText}>TIG</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttons: {
    backgroundColor: "#005086",
    margin: 40,
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
  },
});
