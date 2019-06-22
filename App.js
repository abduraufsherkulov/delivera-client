import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RegisterSvg } from "./assets/images/svgs/bundledsvg";
import Register from "./components/auth/register";

export default function App() {
  return (
    <View style={styles.container}>
      <Register />
      {/* <RegisterSvg /> */}
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
