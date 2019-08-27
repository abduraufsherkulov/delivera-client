import React, { Component } from 'react';
import { AdvancedSearchIcon } from "../../../assets/images/svgs/BundledSvg";
import { View } from 'react-native';

function AdvancedSearchButton() {
    return (
        <View style={{ width: '50%' }}>
            <AdvancedSearchIcon />
        </View>
    )
}

export default AdvancedSearchButton