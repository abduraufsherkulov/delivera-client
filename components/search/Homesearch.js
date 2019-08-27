import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { AdvancedSearchIcon } from "../../assets/images/svgs/BundledSvg";
import { View } from 'react-native';
import AdvancedSearchButton from './components/AdvancedSearchButton';

function HomeSearch() {

  const [search, setSearch] = useState('');

  updateSearch = search => {
    setSearch({ search });
  };
  return (
    <SearchBar
      lightTheme
      placeholder="Поиск"
      inputStyle={{ fontFamily: 'regular', color: 'black' }}
      inputContainerStyle={{ backgroundColor: 'white', padding: 0, borderTopWidth: 0 }}
      containerStyle={{ padding: 0, borderTopWidth: 0, borderRadius: 0, borderBottomWidth: 2, borderBottomColor: '#EDEDED' }}
      onChangeText={updateSearch}
      value={search}
    />
  )
}

export default React.memo(HomeSearch);