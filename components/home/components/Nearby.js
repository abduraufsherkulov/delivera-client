import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";
import { RightArrow } from "../../../assets/images/svgs/BundledSvg";
import { colors, getAdjustedFontSize } from "../../../assets/styles/styles";

class Nearby extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 0.8, flexDirection: 'column', justifyContent: 'space-between'}}>
                    <Text style={styles.textTop}>Рестораны рядом</Text>
                    <Text style={styles.textBottom}>Просмотреть ближайшие заведения</Text>
                </View>
                <View style={{flex: 0.2, justifyContent: 'center', alignItems: 'flex-end'}}><RightArrow /></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%', 
        padding: getAdjustedFontSize(14), 
        height: getAdjustedFontSize(80), 
        backgroundColor: colors.mainBoldColor, 
        borderRadius: 13
    },
    textTop: {
        fontFamily: 'bold',
        fontSize: getAdjustedFontSize(18),
        color: 'white'
    },
    textBottom: {
        fontFamily: 'regular',
        fontSize: getAdjustedFontSize(10),
        color: 'white'
    },

})

export default Nearby;