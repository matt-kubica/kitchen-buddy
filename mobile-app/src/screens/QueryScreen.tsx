import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context';
import { Alert, FlatList, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles';
import { Ingredient } from '../types';
import { ItemBox } from '../components/ItemBox';
import { QueryBox } from '../components/QueryBox';
import { DeleteAllBtn } from '../components/DeleteAllBtn';
import { StackScreenProps } from '@react-navigation/stack';
import { SearchBar } from '../components/SearchBar';

export const QueryScreen = ({ navigation }: StackScreenProps<any>) => {
  const [searchedName, setSearchedName] = useState<string>('');
  const { clearIngredients, ingredients, updateIngredient, deleteIngredient } =
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
      <SearchBar name={searchedName} setName={setSearchedName} />
      <FlatList
        data={filteredIngredients}
        keyExtractor={(item: Ingredient) => `${item.id}`}
        renderItem={({ item }) =>
          item.name.toUpperCase().startsWith(searchedName.toUpperCase()) ? (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ItemDetailsScreen', {
                  ingredient: item,
                  ingredients: ingredients,
                  updateIngredient: updateIngredient,
                  deleteIngredient: deleteIngredient,
                })
              }
            >
              <ItemBox ingredient={item} />
            </TouchableOpacity>
          ) : (
            <View />
          )
        }
        style={{ width: '100%', marginTop: 16 }}
      />
      <DeleteAllBtn deleteAll={deleteAll} />
    </View>
  );
};
