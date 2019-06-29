import React, { Component } from "react";
import { Header } from "react-native-elements";
import { HamburgerIcon, CartIcon } from "../../assets/images/svgs/bundledsvg";

class Alpha extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Header
        containerStyle={{
          backgroundColor: "white"
        }}
        leftComponent={<HamburgerIcon />}
        centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
        rightComponent={<CartIcon />}
      />
    );
  }
}

export default Alpha;
