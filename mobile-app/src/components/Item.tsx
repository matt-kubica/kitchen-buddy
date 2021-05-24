import { Ingredient } from '../types';
import { Pressable, Text, View } from 'react-native';
import { styles } from '../styles';
import React from 'react';

export const Item = ({ ingredient }: { ingredient: Ingredient }) => {
  return (
    <Pressable onPress={() => console.log(ingredient)}>
      <View style={styles.item}>
        <Text>id: {ingredient.id}</Text>
        <Text>name: {ingredient.name}</Text>
        <Text>brand: {ingredient.brand ? ingredient.brand : '-'}</Text>
        <Text>category: {ingredient.category ? ingredient.category : '-'}</Text>
        <Text>
          placement: {ingredient.placement ? ingredient.placement : '-'}
        </Text>
        <Text>
          confection: {ingredient.confection ? ingredient.confection : '-'}
        </Text>
        <Text>
          expiration date:{' '}
          {ingredient.expirationDate
            ? ingredient.expirationDate.toDateString()
            : '-'}
        </Text>
      </View>
    </Pressable>
  );
};
