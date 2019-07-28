import React, { Component } from 'react';
import {View} from 'react-native';
import CategoryTop from './components/CategoryTop';
import CategorySlider from './components/CategorySlider';
import { colors, getAdjustedFontSize } from "../../assets/styles/styles";

class CategoryHome extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={{width: '100%'}}>
            <View style={{width: "100%", paddingHorizontal: getAdjustedFontSize(24)}}>
                <CategoryTop />
            </View>
                <CategorySlider />
            </View>
        );
    }
}

export default CategoryHome;