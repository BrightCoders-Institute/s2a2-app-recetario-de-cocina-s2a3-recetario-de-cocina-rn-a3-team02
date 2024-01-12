import React, {useState} from 'react';
import {SearchBar} from '@rneui/themed';
import {View, StyleSheet} from 'react-native';
import {makeStyles} from '@rneui/themed';
type SearchBarComponentProps = {};

const SwitchComponent: React.FunctionComponent<
  SearchBarComponentProps
> = () => {
  const [search, setSearch] = useState('');

  const updateSearch = () => {
    setSearch(search);
  };

  return (
    <View style={styles.view}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
        lightTheme
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
});

export default SearchBar;
