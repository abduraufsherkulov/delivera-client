import React, { Component } from "react";
import { View, Text } from "react-native";
import Carousel from 'react-native-snap-carousel';

export default class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      entries: [{ title: "hello" }, { title: "world" }]
    };
  }
  _renderItem({ item, index }) {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  }

  render() {
    return (
      <Carousel
        ref={c => {
          this._carousel = c;
        }}
        data={this.state.entries}
        renderItem={this._renderItem}
        sliderWidth={150}
        itemWidth={100}
      />
    );
  }
}
