import React, { Component } from 'react';
import { HamburgerIcon } from "../../../assets/images/svgs/BundledSvg";

class Hamburger extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <HamburgerIcon />
        );
    }
}

export default Hamburger;