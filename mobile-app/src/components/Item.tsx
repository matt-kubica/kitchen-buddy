import {
  Keyboard,
  Switch,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ingredient } from '../types';
import { pickerStyle, styles } from '../styles';
import { default as Picker } from 'react-native-picker-select';
import {
  categoryItems,
  confectionItems,
  placementItems,
} from '../picker-items/ingredient';
import { DateInput } from './DateInput';
import { RipenessInput } from './RipenessInput';
import { SwitchBox } from './SwitchBox';

export const Item = ({
  ingredient,
  setIngredient,
}: {
  ingredient: Ingredient;
  setIngredient: (ingredient: Ingredient) => void;
}) => {
  const [tempExpirationDate, setTempExpirationDate] =
    useState<Date | null>(null);

  useEffect(() => {
    setIngredient({ ...ingredient, ripenessStatus: null, frozen: false });
  }, [ingredient.confection]);

  const prolong = (date: Date | null, months: number) => {
    const oldDate = date ? date : new Date(Date.now());
    return new Date(oldDate.setMonth(oldDate.getMonth() + months));
  };

  const shorten = (date: Date | null, months: number) => {
    const oldDate = date ? date : new Date(Date.now());
    return new Date(oldDate.setMonth(oldDate.getMonth() - months));
  };

  // useEffect(() => {
  //   console.log('Frozen changed')
  //   if (ingredient.frozen)
  //     setIngredient({
  //       ...ingredient,
  //       expirationDate: prolong(ingredient.expirationDate, 6)
  //     });
  //   else
  //     setIngredient({
  //       ...ingredient,
  //       expirationDate: shorten(ingredient.expirationDate, 6)
  //     });
  // }, [ingredient.frozen])

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
        {ingredient.confection === 'fresh' ? (
          <View style={{ width: '100%' }}>
            <RipenessInput
              ripenessStatus={ingredient.ripenessStatus}
              setRipenessStatus={(ripenessStatus) =>
                setIngredient({ ...ingredient, ripenessStatus })
              }
            />
            <SwitchBox
              label={'frozen:'}
              state={ingredient.frozen}
              disabled={ingredient.open}
              setState={(frozen) => {
                if (!ingredient.frozen)
                  setIngredient({
                    ...ingredient,
                    frozen: true,
                    placement: 'freezer',
                    expirationDate: prolong(ingredient.expirationDate, 6),
                  });
                else
                  setIngredient({
                    ...ingredient,
                    frozen: false,
                    placement: 'freezer',
                    expirationDate: shorten(ingredient.expirationDate, 6),
                  });
              }}
            />
          </View>
        ) : (
          <View />
        )}
        <DateInput
          date={ingredient.expirationDate}
          setDate={(expirationDate) => {
            setIngredient({
              ...ingredient,
              expirationDate,
              open: expirationDate ? ingredient.open : false,
            });
          }}
          placeholder={'expiration date...'}
        />
        <SwitchBox
          label={'open:'}
          state={ingredient.open}
          disabled={ingredient.frozen || !ingredient.expirationDate}
          setState={(open) => {
            if (ingredient.expirationDate) {
              if (!ingredient.open) {
                setTempExpirationDate(ingredient.expirationDate);
                const now = new Date(Date.now());
                setIngredient({
                  ...ingredient,
                  expirationDate: new Date(
                    ingredient.expirationDate.setDate(now.getDate() + 3)
                  ),
                  open: true,
                });
              } else {
                setIngredient({
                  ...ingredient,
                  expirationDate: tempExpirationDate,
                  open: false,
                });
              }
            }
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
