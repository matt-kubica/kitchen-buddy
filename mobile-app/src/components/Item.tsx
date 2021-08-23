import {
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import { Ingredient } from '../types';
import { pickerStyle, styles } from '../styles';
import { default as Picker } from 'react-native-picker-select';
import {
  categoryItems,
  confectionItems,
  placementItems,
} from '../picker-items/ingredient';
import { DateInput } from './DateInput';

export const Item = ({
  ingredient,
  setIngredient,
}: {
  ingredient: Ingredient;
  setIngredient: (ingredient: Ingredient) => void;
}) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TextInput
          onChangeText={(name) => setIngredient({ ...ingredient, name })}
          value={ingredient.name}
          style={styles.input}
          placeholder={'ingredient name...'}
        />
        <TextInput
          onChangeText={(brand) => setIngredient({ ...ingredient, brand })}
          value={ingredient.brand ? ingredient.brand : ''}
          style={styles.input}
          placeholder={'brand name...'}
        />
        <Picker
          onValueChange={(category) =>
            setIngredient({ ...ingredient, category })
          }
          items={categoryItems}
          value={ingredient.category}
          style={pickerStyle}
          placeholder={{ label: 'category...', value: null }}
        />
        <Picker
          onValueChange={(placement) =>
            setIngredient({ ...ingredient, placement })
          }
          items={placementItems}
          value={ingredient.placement}
          style={pickerStyle}
          placeholder={{ label: 'placement...', value: null }}
        />
        <Picker
          onValueChange={(confection) =>
            setIngredient({ ...ingredient, confection })
          }
          items={confectionItems}
          value={ingredient.confection}
          style={pickerStyle}
          placeholder={{ label: 'confection...', value: null }}
        />
        <DateInput
          date={ingredient.expirationDate}
          setDate={(expirationDate) =>
            setIngredient({ ...ingredient, expirationDate })
          }
          placeholder={'expiration date...'}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
