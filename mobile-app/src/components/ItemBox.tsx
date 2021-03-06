import { Ingredient, RipenessStatus } from '../types';
import { Text, View } from 'react-native';
import { styles } from '../styles';
import React from 'react';

const returnDashIfNull = (prop: any) => (prop ? prop : '-');
const formatDate = (prop: Date | null) =>
  prop ? new Date(prop).toDateString() : '-';
const formatRipeness = (prop: RipenessStatus | null) =>
  prop ? `${prop.ripeness} on ${formatDate(prop.date)}` : '-';
const formatBoolean = (prop: boolean) => (prop ? 'true' : 'false');

export const ItemBox = ({ ingredient }: { ingredient: Ingredient }) => {
  return (
    <View style={styles.item}>
      <Text>name: {ingredient.name}</Text>
      <Text>brand: {returnDashIfNull(ingredient.brand)}</Text>
      <Text>category: {returnDashIfNull(ingredient.category)}</Text>
      <Text>placement: {returnDashIfNull(ingredient.placement)}</Text>
      <Text>confection: {returnDashIfNull(ingredient.confection)}</Text>
      <Text>expiration date: {formatDate(ingredient.expirationDate)}</Text>
      <Text>ripeness: {formatRipeness(ingredient.ripenessStatus)}</Text>
      <Text>open: {formatBoolean(ingredient.open)}</Text>
      <Text>frozen: {formatBoolean(ingredient.frozen)}</Text>
    </View>
  );
};
