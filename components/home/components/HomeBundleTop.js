import React, { memo, PureComponent } from 'react';
import withMemo from './withMemo';
import MainHeader from '../../header/MainHeader';
import HomeSearch from '../../search/HomeSearch';
import { View, Text } from 'react-native';
import { colors, getAdjustedFontSize } from "../../../assets/styles/styles";
import CategoryHome from '../../category/CategoryHome';
import NearBy from './Nearby';


function areEqual(prevProps, nextProps) {
    /*
    return true if passing nextProps to render would return
    the same result as passing prevProps to render,
    otherwise return false
    */
    //    console.log(nextProps)
    if (prevProps.topRestaurants === nextProps.topRestaurants) {
        console.log(true);
    }
    if (prevProps.topRestaurants === nextProps.topRestaurants) {
        return true;
    }
    return false;
}

function HomeBundleTop(props) {
    console.log('top render')

    // console.log(props)
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

// export default withMemo(HomeBundleTop, []);
export default memo(HomeBundleTop);