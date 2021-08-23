
import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { Ingredient } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { ItemDetails } from "../components/ItemDetails";

type ParamList = {
  ItemDetails: {
    ingredient: Ingredient;
    ingredients: Ingredient[];
    setIngredients: (newIngredients: Ingredient[]) => void;
  };
};

export const ItemScreen = ({
                              route,
                              navigation,
                            }: {
  route: RouteProp<ParamList, 'ItemDetails'>;
  navigation: StackNavigationProp<ParamList>;
}) => {
  const { ingredient, ingredients, setIngredients } = route.params;

  return <ItemDetails
    ingredient={ingredient}
    ingredients={ingredients}
    setIngredients={setIngredients}
    goBack={navigation.goBack}
  />
};
