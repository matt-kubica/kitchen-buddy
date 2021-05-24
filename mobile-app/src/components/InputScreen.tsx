import React, { useContext, useState } from 'react';
import {
  Alert,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { AppContext } from '../context';
import { pickerStyle, styles } from '../styles';
import { Category, Confection, Ingredient, Placement } from '../types';
import { default as Picker } from 'react-native-picker-select';
import { DateInput } from './DateInput';
import {
  categoryItems,
  confectionItems,
  placementItems,
} from '../picker-items/ingredient';

export const InputScreen = () => {
  const { addIngredient, ingredients } = useContext(AppContext);

  const [ingredientName, setIngredientName] = useState<string>('');
  const [brandName, setBrandName] = useState<string | null>(null);
  const [category, setCategory] = useState<Category | null>(null);
  const [placement, setPlacement] = useState<Placement | null>(null);
  const [confection, setConfection] = useState<Confection | null>(null);
  const [expirationDate, setExpirationDate] = useState<Date | null>(null);

  const setStatesToDefault = () => {
    setIngredientName('');
    setBrandName(null);
    setCategory(null);
    setPlacement(null);
    setConfection(null);
    setExpirationDate(null);
  };

  const submit = () => {
    let id: number = 1;
    if (ingredients?.length) {
      id = ingredients[ingredients.length - 1].id + 1;
    }

    if (addIngredient !== undefined) {
      if (ingredientName === '')
        Alert.alert('Name not provided', '', [{ text: 'OK' }]);
      else {
        addIngredient({
          id: id,
          name: ingredientName,
          brand: brandName ? brandName : null,
          category: category ? category : null,
          placement: placement ? placement : null,
          confection: confection ? confection : null,
          expirationDate: expirationDate ? expirationDate : null,
          ripenessStatus: null,
          open: false,
          frozen: false,
          barcode: null,
        });
        setStatesToDefault();
        Keyboard.dismiss();
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TextInput
          onChangeText={setIngredientName}
          value={ingredientName}
          style={styles.input}
          placeholder={'ingredient name...'}
        />
        <TextInput
          onChangeText={setBrandName}
          value={brandName ? brandName : ''}
          style={styles.input}
          placeholder={'brand name...'}
        />
        <Picker
          onValueChange={(value) => setCategory(value)}
          items={categoryItems}
          value={category}
          style={pickerStyle}
          placeholder={{ label: 'category...', value: null }}
        />
        <Picker
          onValueChange={(value) => setPlacement(value)}
          items={placementItems}
          value={placement}
          style={pickerStyle}
          placeholder={{ label: 'placement...', value: null }}
        />
        <Picker
          onValueChange={(value) => setConfection(value)}
          items={confectionItems}
          value={confection}
          style={pickerStyle}
          placeholder={{ label: 'confection...', value: null }}
        />
        <DateInput
          date={expirationDate}
          setDate={setExpirationDate}
          placeholder={'expiration date...'}
        />
        <TouchableOpacity onPress={submit} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>ADD</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};
