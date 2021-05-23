import React, { useContext, useState } from 'react';
import { Button, Keyboard, SafeAreaView, Text, TextInput } from 'react-native';
import { AppContext } from '../context';
import { pickerStyle, styles } from '../styles';
import { Category, Confection, Ingredient, Placement } from '../types';
import { default as Picker } from 'react-native-picker-select';

type CategoryItem = { label: string; value: Category };
const categoryItems: CategoryItem[] = [
  { label: 'fruit', value: 'fruit' },
  { label: 'vegetable', value: 'vegetable' },
  { label: 'dairy', value: 'dairy' },
  { label: 'fish', value: 'fish' },
  { label: 'meat', value: 'meat' },
  { label: 'liquid', value: 'liquid' },
];

type PlacementItem = { label: string; value: Placement };
const placementItems: PlacementItem[] = [
  { label: 'fridge', value: 'fridge' },
  { label: 'freezer', value: 'freezer' },
  { label: 'pantry', value: 'pantry' },
];

type ConfectionItem = { label: string; value: Confection };
const confectionItems: ConfectionItem[] = [
  { label: 'fresh', value: 'fresh' },
  { label: 'canned', value: 'canned' },
  { label: 'frozen', value: 'frozen' },
  { label: 'cured', value: 'cured' },
];

export const InputScreen = () => {
  const { addIngredient, ingredients } = useContext(AppContext);
  const ingredientId = ingredients
    ? ingredients[ingredients.length - 1].id + 1
    : 1;

  const [ingredientName, setIngredientName] = useState<string>('');
  const [brandName, setBrandName] = useState<string | null>(null);
  const [category, setCategory] = useState<Category | null>(null);
  const [placement, setPlacement] = useState<Placement | null>(null);
  const [confection, setConfection] = useState<Confection | null>(null);

  const setStatesToDefault = () => {
    setIngredientName('');
    setBrandName(null);
    setCategory(null);
    setPlacement(null);
    setConfection(null);
  };

  const submit = () => {
    if (addIngredient) {
      const ingredient: Ingredient = {
        id: ingredientId,
        name: ingredientName,
        brand: brandName ? brandName : null,
        category: category ? category : null,
        placement: placement ? placement : null,
        confection: confection ? confection : null,
        expirationDate: null,
        ripenessStatus: null,
        open: false,
        frozen: false,
        barcode: null,
      };
      addIngredient(ingredient);
      setStatesToDefault();
      Keyboard.dismiss();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: 'black' }}>Input Screen</Text>
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
      <Button title={'Add'} onPress={submit} />
    </SafeAreaView>
  );
};
