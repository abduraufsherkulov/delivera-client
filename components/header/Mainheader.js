import React, { Component } from "react";
import { View, Text } from 'react-native';
import { Header } from "react-native-elements";
import Hamburger from "./components/Hamburger";
import Cart from "./components/Cart";
import HeaderSearch from './components/HeaderSearch';

function MainHeader() {
  console.log('rendering');
  return (
    <Header
      leftComponent={<Hamburger />}
      rightComponent={<Cart />}
      centerComponent={<HeaderSearch />}
      containerStyle={{
        backgroundColor: 'white',
        paddingHorizontal: 24
      }} />
  )
}
export default React.memo(MainHeader);
