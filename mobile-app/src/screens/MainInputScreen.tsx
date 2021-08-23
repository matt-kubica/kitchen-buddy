import React, { useContext, useState } from 'react';
import { Alert, Keyboard, View } from 'react-native';
import { AppContext } from '../context';
import { styles } from '../styles';
import { Ingredient } from '../types';
import { Item } from '../components/Item';
import { SubmitItemBtn } from '../components/SubmitItemBtn';

const blankIngredient: Ingredient = {
  id: 0,
  name: '',
  brand: null,
  category: null,
  placement: null,
  confection: null,
  expirationDate: null,
  ripenessStatus: null,
  open: false,
  frozen: false,
  barcode: null,
};

export const MainInputScreen = () => {
  const { addIngredient, ingredients } = useContext(AppContext);
  const [innerIngredient, setInnerIngredient] =
    useState<Ingredient>(blankIngredient);

  const submit = () => {
    let id: number = 1;
    if (ingredients?.length) {
      id = ingredients[ingredients.length - 1].id + 1;
    }

    if (addIngredient !== undefined) {
      if (innerIngredient.name === '')
        Alert.alert('Name not provided', '', [{ text: 'OK' }]);
      else {
        addIngredient({
          id: id,
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
        });
        setInnerIngredient(blankIngredient);
        Keyboard.dismiss();
      }
    }
  };

  return (
    <View style={styles.container}>
      <Item ingredient={innerIngredient} setIngredient={setInnerIngredient} />
      <SubmitItemBtn submit={() => submit()} />
    </View>
  );
};
