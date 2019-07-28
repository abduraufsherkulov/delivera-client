import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { colors, getAdjustedFontSize } from "../../../assets/styles/styles";


class CategoryTop extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                <View style={{flex: 1}}><Text style={{fontFamily:'bold', fontSize: getAdjustedFontSize(24)}}>Категории</Text></View>
                <View style={{flex: 1}}><Text style={{fontFamily: 'regular', fontSize: getAdjustedFontSize(12), color: colors.mainColor, textAlign: 'right'}}>Все катерории</Text></View>
            </View>
        );
    }
}

export default CategoryTop;