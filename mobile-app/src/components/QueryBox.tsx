import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { default as Picker } from 'react-native-picker-select';
import { Category, dummyIngredients, Ingredient, Placement } from '../types';
import { AppContext } from '../context';
import { styles } from '../styles';
import {
  categoryItems,
  InnerCategory,
  InnerPlacement,
  MissingData,
  missingDataItems,
  placementItems,
  QueryType,
  queryTypeItems,
  ShortPeriod,
  shortPeriodItems,
} from '../picker-items/query';

export const QueryBox = ({
  ingredients,
  setIngredients,
}: {
  ingredients: Ingredient[];
  setIngredients: (arg: Ingredient[]) => void;
}) => {
  const [queryType, setQueryType] = useState<QueryType | null>(null);
  const [expireIn, setExpireIn] = useState<ShortPeriod | null>(null);
  const [missingData, setMissingData] = useState<MissingData | null>(null);
  const [addedWithin, setAddedWithin] = useState<ShortPeriod | null>(null);
  const [placement, setPlacement] = useState<InnerPlacement | null>(null);
  const [category, setCategory] = useState<InnerCategory | null>(null);

  const createQuery = () => {
    switch (queryType) {
      case 'expiring-in':
        if (expireIn !== null) {
          setIngredients(
            ingredients.filter((ingredient: Ingredient) => {
              const now: Date = new Date();
              if (ingredient.expirationDate !== null)
                return (
                  new Date(now.getTime() + periodToTime(expireIn)) >=
                  ingredient.expirationDate
                );
              else return false;
            })
          );
        }
        break;
      case 'missing-data':
        if (missingData !== null) {
          setIngredients(
            ingredients.filter((ingredient: Ingredient) => {
              if (missingData === 'any') {
                return Object.values(ingredient).some(
                  (value) => value === null
                );
              } else {
                return ingredient[missingData] === null;
              }
            })
          );
        }
        break;
      case 'added-within':
        // TODO: add 'added' field to ingredient object, for now, just pass all ingredients
        setIngredients(ingredients);
        break;
      case 'same-category':
        if (category !== null) {
          setIngredients(
            ingredients.filter((ingredient: Ingredient) => {
              if (category !== 'any') {
                return ingredient.category === category;
              }
              return true;
            })
          );
        }
        break;
      case 'same-placement':
        if (placement !== null) {
          setIngredients(
            ingredients.filter((ingredient: Ingredient) => {
              if (placement !== 'any') {
                return ingredient.placement === placement;
              }
              return true;
            })
          );
        }
        break;
    }
  };

  const discardQuery = () => {
    setIngredients(ingredients);
    setQueryType(null);
    setExpireIn(null);
    setMissingData(null);
    setAddedWithin(null);
    setPlacement(null);
    setCategory(null);
  };

  return (
    <View style={innerStyles.container}>
      <View style={{ flex: 4, marginRight: 8 }}>
        <Picker
          onValueChange={(value) => setQueryType(value)}
          items={queryTypeItems}
          value={queryType}
          style={innerPickerStyle}
          placeholder={{ label: 'filter by...', value: null }}
        />
      </View>
      <View style={{ flex: 4, marginRight: 4 }}>
        {queryType == 'expiring-in' ? (
          <Picker
            onValueChange={(value) => setExpireIn(value)}
            items={shortPeriodItems}
            value={expireIn}
            style={innerPickerStyle}
            placeholder={{ label: '... days', value: null }}
          />
        ) : queryType == 'missing-data' ? (
          <Picker
            onValueChange={(value) => setMissingData(value)}
            items={missingDataItems}
            value={missingData}
            style={innerPickerStyle}
            placeholder={{ label: 'any', value: 'any' }}
          />
        ) : queryType == 'added-within' ? (
          <Picker
            onValueChange={(value) => setAddedWithin(value)}
            items={shortPeriodItems}
            value={addedWithin}
            style={innerPickerStyle}
            placeholder={{ label: '... days', value: null }}
          />
        ) : queryType == 'same-placement' ? (
          <Picker
            onValueChange={(value) => setPlacement(value)}
            items={placementItems}
            value={placement}
            style={innerPickerStyle}
            placeholder={{ label: 'any', value: 'any' }}
          />
        ) : queryType == 'same-category' ? (
          <Picker
            onValueChange={(value) => setCategory(value)}
            items={categoryItems}
            value={category}
            style={innerPickerStyle}
            placeholder={{ label: 'any', value: 'any' }}
          />
        ) : (
          <View style={innerStyles.placeholder} />
        )}
      </View>

      <TouchableOpacity
        style={innerStyles.button}
        onPress={() => createQuery()}
      >
        <Text style={{ fontSize: 32 }}>✅</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={innerStyles.button}
        onPress={() => discardQuery()}
      >
        <Text style={{ fontSize: 32 }}>❌</Text>
      </TouchableOpacity>
    </View>
  );
};

const periodToTime = (period: ShortPeriod): number => {
  const millisecondsInDay = 24 * 60 * 60 * 1000;
  switch (period) {
    case '1d':
      return millisecondsInDay;
    case '3d':
      return 3 * millisecondsInDay;
    case '7d':
      return 7 * millisecondsInDay;
    case '14d':
      return 14 * millisecondsInDay;
    case '28d':
      return 28 * millisecondsInDay;
  }
};

const innerStyles = StyleSheet.create({
  placeholder: {
    height: '100%',
    paddingHorizontal: 4,
    borderRadius: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    marginTop: 'auto',
    marginBottom: 'auto',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  container: {
    flexDirection: 'row',
    marginBottom: 8,
    height: styles.input.height,
    justifyContent: 'center',
  },
});

const innerPickerStyle = StyleSheet.create({
  inputIOS: {
    height: '100%',
    paddingHorizontal: 4,
    borderRadius: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    fontSize: styles.input.fontSize,
  },
});
