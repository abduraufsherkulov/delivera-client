import React, { Component } from 'react';
import Svg, { Path, G } from "react-native-svg";
import {View, Text} from 'react-native';
// import { CartIcon } from "../../assets/images/svgs/bundledsvg";
import { colors, getAdjustedFontSize } from "../../../assets/styles/styles";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Svg width="60%" height="80%" viewBox="0 0 24 31" fill="none">
              <Path
                d="M23.994 25.946L22.277 6.602a.827.827 0 0 0-.822-.755h-3.532a5.924 5.924 0 0 0-11.847 0H2.545a.822.822 0 0 0-.822.755L.006 25.946c0 .025-.006.049-.006.074a4.274 4.274 0 0 0 4.5 3.993h15a4.274 4.274 0 0 0 4.5-3.994.298.298 0 0 0-.006-.073zM12 1.669a4.273 4.273 0 0 1 4.268 4.178H7.732A4.273 4.273 0 0 1 12 1.669zm7.5 26.687h-15a2.642 2.642 0 0 1-2.845-2.3L3.3 7.513h2.772v2.515a.828.828 0 1 0 1.656 0V7.513h8.542v2.515a.828.828 0 1 0 1.656 0V7.513h2.772l1.649 18.546a2.646 2.646 0 0 1-2.847 2.298v-.001z"
                fill="#000"
              />
              <View style={{width: "100%", height: 53, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 20, fontFamily: 'bold'}}>11</Text>
              </View>
            </Svg>
        );
    }
}

export default Cart;