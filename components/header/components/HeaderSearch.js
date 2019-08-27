import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';

function HeaderSearch() {
  const [search, setSearch] = useState('');

  updateSearch = search => {
    setSearch({ search });
  };

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
      searchIcon={{ color: 'black' }}
      inputContainerStyle={{
        backgroundColor: '#EDEDED',
        borderRadius: 55
      }}
      inputStyle={{ fontFamily: 'regular', color: 'black' }}
      placeholder="ул. Турк 9..."
      placeholderTextColor={'black'}
      onChangeText={updateSearch}
      value={search}
    />
  )
}

export default HeaderSearch