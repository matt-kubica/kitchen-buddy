import React, { useContext, useState } from 'react';
import { AppContext } from '../context';
import { FlatList, Text, TextInput, View } from 'react-native';
import { styles } from '../styles';
import { Ingredient } from '../types';
import { Item } from './Item';
import { QueryBox } from './QueryBox';

export const QueryScreen = () => {
  const [searchedName, setSearchedName] = useState<string>('');
  const { clearIngredients, ingredients } = useContext(AppContext);

  const [innerIngredients, setInnerIngredients] = useState<Ingredient[]>(
    ingredients ? ingredients : []
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Query Screen</Text>

      <QueryBox
        innerIngredients={innerIngredients}
        setInnerIngredients={setInnerIngredients}
      />

      <TextInput
        onChangeText={setSearchedName}
        value={searchedName}
        style={styles.searchBar}
        placeholder={'filter by name...'}
        placeholderTextColor={'#c4c4c4'}
      />

      <FlatList
        data={innerIngredients}
        keyExtractor={(item: Ingredient) => `${item.id}`}
        renderItem={({ item }) =>
          item.name.toUpperCase().startsWith(searchedName.toUpperCase()) ? (
            <Item ingredient={item} />
          ) : (
            <View />
          )
        }
        style={{ width: '100%', marginTop: 24 }}
      />
      {/*<Button title={'Clear Ingredients'} onPress={clearIngredients} />*/}
    </View>
  );
};
