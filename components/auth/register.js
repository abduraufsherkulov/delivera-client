import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions
} from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import { Logo } from "../../assets/images/svgs/BundledSvg";
import { colors, getAdjustedFontSize } from "../../assets/styles/styles";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const BG_IMAGE = require("../../assets/images/bg_screen1.jpg");

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
      phone: "",
      phone_valid: true,
      password: "",
      login_failed: false,
      showLoading: false
    };
  }
  validatephone(phone) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(phone);
  }

  submitLoginCredentials() {
    const { showLoading } = this.state;

    this.setState({
      showLoading: !showLoading
    });
  }

  render() {
    const { phone, password, phone_valid, showLoading } = this.state;

    return (
      <View style={styles.container}>
        <View style={{ flex: 0.8, flexDirection: "column" }}>
          <View style={{ flex: 0.2 }}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Logo />
            </View>
          </View>
          <View style={{ flex: 0.8 }}>
            <View style={styles.loginView}>
              <View style={styles.loginTitle}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.backText}>Welcome back</Text>
                </View>
                <View style={{ marginTop: -10 }}>
                  <Text style={styles.backText}>You've been missing</Text>
                </View>
              </View>
              <View style={styles.loginInput}>
                <Input
                  containerStyle={{ marginVertical: 10 }}
                  onChangeText={phone => this.setState({ phone })}
                  value={phone}
                  inputStyle={{
                    marginLeft: 10,
                    fontFamily: "regular",
                    color: "black"
                  }}
                  keyboardAppearance="light"
                  placeholder="Phone"
                  autoFocus={false}
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="phone-pad"
                  returnKeyType="next"
                  ref={input => (this.phoneInput = input)}
                  onSubmitEditing={() => {
                    this.setState({ phone_valid: this.validatephone(phone) });
                    this.passwordInput.focus();
                  }}
                  blurOnSubmit={false}
                  placeholderTextColor={colors.disabledColor}
                  errorStyle={{ textAlign: "center", fontSize: 12 }}
                  errorMessage={
                    phone_valid ? null : "Please enter a valid phone address"
                  }
                />
                <Input
                  containerStyle={{ marginVertical: 10 }}
                  onChangeText={password => this.setState({ password })}
                  value={password}
                  inputStyle={{
                    marginLeft: 10,
                    color: "black",
                    fontFamily: "regular"
                  }}
                  secureTextEntry={true}
                  keyboardAppearance="light"
                  placeholder="Password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="default"
                  returnKeyType="done"
                  ref={input => (this.passwordInput = input)}
                  blurOnSubmit={true}
                  placeholderTextColor={colors.disabledColor}
                />
              </View>
              <Button
                type="solid"
                title="Войти"
                activeOpacity={1}
                underlayColor="transparent"
                onPress={this.submitLoginCredentials.bind(this)}
                loading={showLoading}
                loadingProps={{ size: "small", color: "white" }}
                disabled={!phone_valid && password.length < 8}
                buttonStyle={{
                  width: "35%",
                  alignSelf: "center",
                  backgroundColor: colors.mainColor,
                  borderWidth: 2,
                  borderColor: colors.mainColor,
                  borderRadius: 30
                }}
                containerStyle={{ marginVertical: 10 }}
                titleStyle={{
                  fontFamily: "regular",
                  fontSize: getAdjustedFontSize(14),
                  textTransform: "uppercase"
                }}
              />
              <View style={styles.footerView}>
                <Text style={{ color: "grey" }}>New here?</Text>
                <Button
                  title="Create an Account"
                  type="clear"
                  activeOpacity={0.5}
                  titleStyle={{
                    color: colors.mainColor,
                    fontSize: 15,
                    fontFamily: "regular"
                  }}
                  containerStyle={{
                    marginTop: -10,
                    backgroundColor: "transparent"
                  }}
                  onPress={() => console.log("Account created")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  loginView: {
    backgroundColor: "transparent",
    flex: 1
  },
  loginTitle: {
    flex: 0.2,
    justifyContent: "center"
    // alignItems: "center"
  },
  backText: {
    color: "black",
    fontSize: getAdjustedFontSize(25),
    fontFamily: "bold"
  },
  loginInput: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center"
  },
  footerView: {
    marginTop: 20,
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  }
});
