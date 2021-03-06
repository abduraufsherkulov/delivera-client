import React, { Component } from 'react';
import { colors, getAdjustedFontSize } from "../../../assets/styles/styles";

function Popular() {
    return (
        <View style={{flex: 1}}>
            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                <View style={{flex: 1}}><Text style={{fontFamily:'bold', fontSize: getAdjustedFontSize(24)}}>Категории</Text></View>
                <View style={{flex: 1}}><Text style={{fontFamily: 'regular', fontSize: getAdjustedFontSize(12), color: colors.mainColor, textAlign: 'right'}}>Все катерории</Text></View>
            </View>
        </View>
    )
}

export default Popular
