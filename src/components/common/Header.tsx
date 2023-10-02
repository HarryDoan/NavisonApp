import {icons} from '@assets/index';
import {Block, Image, Pressable} from '@components/index';
import {COLORS} from '@theme/index';
import React, {useState} from 'react';
import {Platform, TextInput, View} from 'react-native';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log(`Searching for: ${searchText}`);
  };

  return (
    <Pressable
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,

        borderRadius: 5,
        width: '85%',
        marginVertical: 15,
        height: 45,
      }}>
      <TextInput
        maxLength={20}
        numberOfLines={1}
        placeholder="Wines & Spirits"
        placeholderTextColor={COLORS.green}
        value={searchText}
        onChangeText={text => setSearchText(text)}
        style={{
          paddingHorizontal: 35,
          width: '100%',
          height: 45,
          zIndex: 100,
        }}
      />
      <Pressable
        style={{
          position: 'absolute',
          right: 10,
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',

          height: 45,
          borderRadius: 5,
          paddingHorizontal: 10,
          backgroundColor: 'white',
        }}
        onPress={handleSearch}>
        <Image square={22} source={icons.ic_search} />

        <Image square={22} source={icons.ic_trade} />
      </Pressable>

      <Image
        absolute
        right={-50}
        top={2}
        square={50}
        source={icons.ic_notify}
      />
    </Pressable>
  );
};

export default SearchBar;
