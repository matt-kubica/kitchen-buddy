import {
  Alert,
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { Category, Confection, Ingredient, Placement } from '../types';
import { pickerStyle, styles } from '../styles';
import { default as Picker } from 'react-native-picker-select';
import {
  categoryItems,
  confectionItems,
  placementItems,
} from '../picker-items/ingredient';
import { DateInput } from './DateInput';
import { StackNavigationProp } from '@react-navigation/stack';

type ParamList = {
  ItemDetails: {
    ingredient: Ingredient;
    ingredients: Ingredient[];
    setIngredients: (newIngredients: Ingredient[]) => void;
  };
};
export const ItemDetails = ({
  route,
  navigation,
}: {
  route: RouteProp<ParamList, 'ItemDetails'>;
  navigation: StackNavigationProp<ParamList>;
}) => {
  const { ingredient, ingredients, setIngredients } = route.params;

  const [ingredientName, setIngredientName] = useState<string>(ingredient.name);
  const [brandName, setBrandName] = useState<string | null>(ingredient.brand);
  const [category, setCategory] = useState<Category | null>(
    ingredient.category
  );
  const [placement, setPlacement] = useState<Placement | null>(
    ingredient.placement
  );
  const [confection, setConfection] = useState<Confection | null>(
    ingredient.confection
  );
  const [expirationDate, setExpirationDate] = useState<Date | null>(
    ingredient.expirationDate
  );

  const submit = () => {
    if (setIngredients !== undefined) {
      if (ingredientName === '')
        Alert.alert('Name not provided', '', [{ text: 'OK' }]);
      else {
        const updatedIngredient: Ingredient = {
          id: ingredient.id,
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
    <SafeAreaView style={styles.container}>
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
        <Text style={styles.submitButtonText}>SUBMIT</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={deleteItem} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>DELETE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
