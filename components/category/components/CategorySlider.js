import React, { Component } from 'react';
import { ScrollView, Dimensions, View, Text, StyleSheet } from 'react-native';

import { BurgerIcon, PizzaIcon } from '../../../assets/images/svgs/CategoryDumps';
import { colors, getAdjustedFontSize } from "../../../assets/styles/styles";

const SCREEN_WIDTH = Dimensions.get('window').width;

class CategorySlider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('rendered');
    return (
      <View style={{ paddingVertical: getAdjustedFontSize(24) }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: getAdjustedFontSize(24) }}
        >
          <View style={styles.circleContainer}>
            <View style={styles.iconSide}><BurgerIcon /></View>
            <View style={styles.infoSide}>
              <View><Text style={styles.topInfoSide}>Бургеры</Text></View>
              <View><Text style={styles.bottomInfoSide}>21 заведений</Text></View>
            </View>
          </View>
          <View style={styles.circleContainer}>
            <View style={styles.iconSide}><PizzaIcon /></View>
            <View style={styles.infoSide}>
              <View><Text style={styles.topInfoSide}>Пицца</Text></View>
              <View><Text style={styles.bottomInfoSide}>91 заведений</Text></View>
            </View>
          </View>
          <View style={styles.circleContainer}>
            <View style={styles.iconSide}><BurgerIcon /></View>
            <View style={styles.infoSide}>
              <View><Text style={styles.topInfoSide}>Бургеры</Text></View>
              <View><Text style={styles.bottomInfoSide}>21 заведений</Text></View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleContainer: {
    flex: 1, 
    flexDirection: 'row', 
    width: getAdjustedFontSize(160), 
    height: getAdjustedFontSize(60), 
    borderWidth: 1, 
    borderColor: 
    colors.disabledColor, 
    borderRadius: 65,
    marginRight: getAdjustedFontSize(10)
  },
  iconSide: {
    flex: 0.4, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  infoSide: {
    flex: 0.6, 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'flex-start'
  },
  topInfoSide: {
    fontFamily: 'bold', 
    fontSize: getAdjustedFontSize(14)
  },
  bottomInfoSide: {
    fontFamily: 'regular', 
    fontSize: getAdjustedFontSize(12), 
    color: colors.disabledColor
  }
});


export default CategorySlider;