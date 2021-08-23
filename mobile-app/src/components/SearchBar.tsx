import { styles } from '../styles';
import { TextInput } from 'react-native';
import React from 'react';

export const SearchBar = ({
  name,
  setName,
}: {
  name: string;
  setName: (name: string) => void;
}) => {
  return (
    <TextInput
      onChangeText={setName}
      value={name}
      style={styles.searchBar}
      placeholder={'filter by name...'}
      placeholderTextColor={'#c4c4c4'}
      clearButtonMode={'while-editing'}
    />
  );
};
