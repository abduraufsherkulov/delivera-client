import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Welcome from "./components/auth/Welcome";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { MyApp } from "./components/navigator/Drawer";
import { fonts } from "./assets/styles/styles";
import { cacheFonts } from "./assets/helpers/AssetsCaching";
import { AppLoading } from "expo";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async _loadAssetsAsync() {
    const fontAssets = cacheFonts([fonts]);

    await Promise.all([...fontAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <React.Fragment>
      <MyApp /></React.Fragment>
      // <View style={styles.container}>
      //    <Welcome />
      //    <Register />
      //    <Login />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
