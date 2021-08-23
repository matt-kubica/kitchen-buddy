import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context';
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from '../styles';
import { Ingredient } from '../types';
import { Item } from '../components/Item';
import { QueryBox } from '../components/QueryBox';
import { StackScreenProps } from '@react-navigation/stack';

export const QueryScreen = ({ navigation }: StackScreenProps<any>) => {
  const [searchedName, setSearchedName] = useState<string>('');
  const { clearIngredients, ingredients, setIngredients } =
    useContext(AppContext);

  const [filteredIngredients, setFilteredIngredients] = useState<Ingredient[]>(
    ingredients ? ingredients : []
  );

  const deleteAll = () => {
    if (ingredients?.length) {
      Alert.alert('Delete all?', '', [
        {
          text: 'Yes',
          onPress: () => (clearIngredients ? clearIngredients() : null),
        },
        { text: 'No', onPress: () => null },
      ]);
    }
  };

  // update filtered (inner) ingredients if global ingredients have changed
  useEffect(
    () => setFilteredIngredients(ingredients ? ingredients : []),
    [ingredients]
  );

  return (
    <View style={styles.container}>
      <QueryBox
        ingredients={ingredients ? ingredients : []}
        setIngredients={setFilteredIngredients}
      />

      <TextInput
        onChangeText={setSearchedName}
        value={searchedName}
        style={styles.searchBar}
        placeholder={'filter by name...'}
        placeholderTextColor={'#c4c4c4'}
        clearButtonMode={'while-editing'}
      />

      <FlatList
        data={filteredIngredients}
        keyExtractor={(item: Ingredient) => `${item.id}`}
        renderItem={({ item }) =>
          item.name.toUpperCase().startsWith(searchedName.toUpperCase()) ? (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ItemScreen', {
                  ingredient: item,
                  ingredients: ingredients,
                  setIngredients: setIngredients,
                })
              }
            >
              <Item ingredient={item} />
            </TouchableOpacity>
          ) : (
            <View />
          )
        }
        style={{ width: '100%', marginTop: 16 }}
      />
      <TouchableOpacity onPress={deleteAll} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>DELETE ALL</Text>
      </TouchableOpacity>
    </View>
  );
};
