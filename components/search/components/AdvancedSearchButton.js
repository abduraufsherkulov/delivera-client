import React, { Component } from 'react';
import { AdvancedSearchIcon } from "../../../assets/images/svgs/BundledSvg";
import {View} from 'react-native';

class AdvancedSearchButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={{width: '50%'}}>
                <AdvancedSearchIcon />
            </View>
        );
    }
}

export default AdvancedSearchButton;