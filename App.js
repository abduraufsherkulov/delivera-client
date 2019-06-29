import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Welcome from "./components/auth/welcome";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import { MyApp } from "./components/navigator/drawer";
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
      <MyApp />
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
