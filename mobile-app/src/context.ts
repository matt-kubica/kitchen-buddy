import { createContext } from 'react';
import { Ingredient, AppContextProps } from './types';

export const AppContext = createContext<Partial<AppContextProps>>({
  addIngredient: (ingredient: Ingredient) => {},
  deleteIngredient: (ingredient: Ingredient) => {},
  updateIngredient: (
    oldIngredient: Ingredient,
    newIngredient: Ingredient
  ) => {},
  appendIngredients: (ingredients: Ingredient[]) => {},
  clearIngredients: () => {},
  ingredients: [],
});
