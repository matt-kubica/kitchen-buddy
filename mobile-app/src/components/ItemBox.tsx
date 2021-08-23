import { Ingredient } from '../types';
import { Text, View } from 'react-native';
import { styles } from '../styles';
import React from 'react';

const returnDashIfNull = (prop: any) => (prop ? prop : '-');

export const ItemBox = ({ ingredient }: { ingredient: Ingredient }) => {
  return (
    <View style={styles.item}>
      <Text>id: {ingredient.id}</Text>
      <Text>name: {ingredient.name}</Text>
      <Text>brand: {returnDashIfNull(ingredient.brand)}</Text>
      <Text>category: {returnDashIfNull(ingredient.category)}</Text>
      <Text>placement: {returnDashIfNull(ingredient.placement)}</Text>
      <Text>confection: {returnDashIfNull(ingredient.confection)}</Text>
      <Text>
        expiration date:{' '}
        {ingredient.expirationDate
          ? ingredient.expirationDate.toDateString()
          : '-'}
      </Text>
    </View>
  );
};
