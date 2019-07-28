import React, {Component} from 'react';
import { SearchBar } from 'react-native-elements';

class HeaderSearch extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        containerStyle={{
          width: '100%',
          backgroundColor: 'white',
          borderColor: "white",
          padding: 0,
          borderRadius: 55
        }}
        lightTheme
        searchIcon={{color: 'black'}}
        inputContainerStyle={{backgroundColor: '#EDEDED',
        borderRadius: 55}}
        inputStyle={{fontFamily: 'regular', color: 'black'}}
        placeholder="ул. Турк 9..."
        placeholderTextColor={'black'}
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}
export default HeaderSearch;