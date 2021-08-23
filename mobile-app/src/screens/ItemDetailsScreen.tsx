import React, { useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { Ingredient } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { Item } from '../components/Item';
import { Alert, Keyboard, View } from 'react-native';
import { SubmitItemBtn } from '../components/SubmitItemBtn';
import { DeleteItemBtn } from '../components/DeleteItemBtn';
import { styles } from '../styles';

type ParamList = {
  ItemDetails: {
    ingredient: Ingredient;
    ingredients: Ingredient[];
    setIngredients: (newIngredients: Ingredient[]) => void;
  };
};

export const ItemDetailsScreen = ({
  route,
  navigation,
}: {
  route: RouteProp<ParamList, 'ItemDetails'>;
  navigation: StackNavigationProp<ParamList>;
}) => {
  const { ingredient, ingredients, setIngredients } = route.params;
  const [innerIngredient, setInnerIngredient] =
    useState<Ingredient>(ingredient);

  const submit = () => {
    if (setIngredients !== undefined) {
      if (innerIngredient.name === '')
        Alert.alert('Name not provided', '', [{ text: 'OK' }]);
      else {
        const updatedIngredient: Ingredient = {
          id: innerIngredient.id,
          name: innerIngredient.name,
          brand: innerIngredient.brand ? innerIngredient.brand : null,
          category: innerIngredient.category ? innerIngredient.category : null,
          placement: innerIngredient.placement
            ? innerIngredient.placement
            : null,
          confection: innerIngredient.confection
            ? innerIngredient.confection
            : null,
          expirationDate: innerIngredient.expirationDate
            ? innerIngredient.expirationDate
            : null,
          ripenessStatus: null,
          open: false,
          frozen: false,
          barcode: null,
        };
        setIngredients(
          ingredients.map((i: Ingredient) =>
            i.id === updatedIngredient.id ? updatedIngredient : i
          )
        );
        Keyboard.dismiss();
        navigation.goBack();
      }
    }
  };

  const deleteItem = () => {
    Alert.alert('Delete ingredient?', '', [
      {
        text: 'Yes',
        onPress: () => {
          setIngredients(
            ingredients.filter((i: Ingredient) => i.id !== ingredient.id)
          );
          navigation.goBack();
        },
      },
      { text: 'No', onPress: () => null },
    ]);
  };

  return (
    <View style={styles.container}>
      <Item ingredient={innerIngredient} setIngredient={setInnerIngredient} />
      <SubmitItemBtn submit={() => submit()} />
      <DeleteItemBtn deleteItem={() => deleteItem()} />
    </View>
  );
};
