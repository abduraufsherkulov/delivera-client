import React, {Component} from 'react';
import { SearchBar } from 'react-native-elements';
import { AdvancedSearchIcon } from "../../assets/images/svgs/BundledSvg";
import {View} from 'react-native';
import AdvancedSearchButton from './components/AdvancedSearchButton';

class HomeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
}
  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        lightTheme
        placeholder="Поиск"
        inputStyle={{fontFamily: 'regular', color: 'black'}}
        inputContainerStyle={{backgroundColor: 'white', padding: 0, borderTopWidth: 0}}
        containerStyle={{padding: 0, borderTopWidth: 0, borderRadius: 0, borderBottomWidth: 2, borderBottomColor: '#EDEDED'}}
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}

export default HomeSearch;