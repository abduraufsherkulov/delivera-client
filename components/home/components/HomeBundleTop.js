import React, { Component, PureComponent } from 'react';
import MainHeader from '../../header/Mainheader';
import HomeSearch from '../../search/Homesearch';
import { View, Text } from 'react-native';
import { colors, getAdjustedFontSize } from "../../../assets/styles/styles";
import CategoryHome from '../../category/CategoryHome';
import NearBy from './Nearby';

class HomeBundleTop extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View>
                <MainHeader />
                <View style={{ width: '100%', paddingHorizontal: getAdjustedFontSize(24), paddingVertical: getAdjustedFontSize(30) }}>
                    <Text style={{ fontFamily: 'bold', fontSize: getAdjustedFontSize(32), }}>Что вы хотите заказать?</Text>
                </View>
                <View style={{ width: "100%", paddingHorizontal: getAdjustedFontSize(24) }}>
                    <HomeSearch />
                </View>
                <View style={{ width: "100%", paddingHorizontal: getAdjustedFontSize(24), paddingVertical: getAdjustedFontSize(32) }}>
                    <NearBy />
                </View>
                <CategoryHome />
            </View>
        );
    }
}

export default HomeBundleTop;