import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text_h1}>
            My first React Native App
        </Text>
        <Text>
            Open up App.js to start working on the app
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text_h1: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
