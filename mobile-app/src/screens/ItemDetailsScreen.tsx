import React, { useEffect, useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { Ingredient } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { Item } from '../components/Item';
import { Alert, Keyboard, View } from 'react-native';
import { SubmitItemBtn } from '../components/SubmitItemBtn';
import { DeleteItemBtn } from '../components/DeleteItemBtn';
import { styles } from '../styles';
import { determineExpirationDate, determineRipenessStatus } from '../utils';

type ParamList = {
  ItemDetails: {
    ingredient: Ingredient;
    ingredients: Ingredient[];
    updateIngredient: (
      oldIngredient: Ingredient,
      newIngredient: Ingredient
    ) => void;
    deleteIngredient: (ingredient: Ingredient) => void;
  };
};

export const ItemDetailsScreen = ({
  route,
  navigation,
}: {
  route: RouteProp<ParamList, 'ItemDetails'>;
  navigation: StackNavigationProp<ParamList>;
}) => {
  const { ingredient, updateIngredient, deleteIngredient } = route.params;
  const [innerIngredient, setInnerIngredient] =
    useState<Ingredient>(ingredient);

  useEffect(() => {
    if (ingredient.open && !innerIngredient.open) {
      Alert.alert(
        'Forbidden action!',
        "You cannot close ingredient if it's already opened!",
        [{ text: 'OK' }]
      );
      setInnerIngredient({ ...innerIngredient, open: true });
    }

    if (ingredient.frozen && !innerIngredient.frozen) {
      Alert.alert(
        'Forbidden action!',
        "You cannot defreeze ingredient if it's already frozen!",
        [{ text: 'OK' }]
      );
      setInnerIngredient({ ...innerIngredient, frozen: true });
    }

    if (
      (ingredient.frozen || ingredient.open) &&
      innerIngredient.expirationDate?.getTime() !==
        ingredient.expirationDate?.getTime()
    ) {
      Alert.alert(
        'Forbidden action!',
        'You cannot change expiration date of frozen/opened ingredient!',
        [{ text: 'OK' }]
      );
      setInnerIngredient({
        ...innerIngredient,
        expirationDate: ingredient.expirationDate,
      });
    }
  }, [
    innerIngredient.open,
    innerIngredient.frozen,
    innerIngredient.expirationDate,
  ]);

  const submit = () => {
    if (updateIngredient !== undefined) {
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
          expirationDate: determineExpirationDate(innerIngredient),
          ripenessStatus: determineRipenessStatus(innerIngredient),
          open: innerIngredient.open,
          frozen: innerIngredient.frozen,
          barcode: null,
        };
        updateIngredient(ingredient, updatedIngredient);
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
          deleteIngredient(ingredient);
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
