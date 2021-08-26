import React, { useContext, useState } from 'react';
import { Alert, Keyboard, View } from 'react-native';
import { AppContext } from '../context';
import { styles } from '../styles';
import { Ingredient } from '../types';
import { Item } from '../components/Item';
import { SubmitItemBtn } from '../components/SubmitItemBtn';

const blankIngredient: Ingredient = {
  id: '',
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
  const { addIngredient } = useContext(AppContext);
  const [innerIngredient, setInnerIngredient] =
    useState<Ingredient>(blankIngredient);

  const submit = () => {
    if (addIngredient !== undefined) {
      if (innerIngredient.name === '')
        Alert.alert('Name not provided', '', [{ text: 'OK' }]);
      else {
        const newIngredient = {
          id: 'temporary-id',
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
          ripenessStatus: innerIngredient.ripenessStatus
            ? innerIngredient.ripenessStatus
            : null,
          open: false,
          frozen: false,
          barcode: null,
        };
        addIngredient(newIngredient);
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
