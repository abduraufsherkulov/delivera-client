import React, { Component, PureComponent } from 'react';
import MainHeader from '../../header/MainHeader';
import HomeSearch from '../../search/HomeSearch';
import { View, Text } from 'react-native';
import { colors, getAdjustedFontSize } from "../../../assets/styles/styles";
import CategoryHome from '../../category/CategoryHome';
import NearBy from './Nearby';

function HomeBundleTop() {
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
    )
}

export default React.memo(HomeBundleTop);