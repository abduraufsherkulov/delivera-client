import React, { Component } from 'react';
import { View } from 'react-native';
import CategoryTop from './components/CategoryTop';
import CategorySlider from './components/CategorySlider';
import { colors, getAdjustedFontSize } from "../../assets/styles/styles";


function CategoryHome() {
    return (
        <View style={{ width: '100%' }}>
            <View style={{ width: "100%", paddingHorizontal: getAdjustedFontSize(24) }}>
                <CategoryTop />
            </View>
            <CategorySlider />
        </View>
    )
}


export default React.memo(CategoryHome);