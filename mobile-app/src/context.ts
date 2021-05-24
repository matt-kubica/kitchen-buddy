import { createContext } from 'react';
import { Ingredient, AppContextProps } from './types';

export const AppContext = createContext<Partial<AppContextProps>>({
  addIngredient: (ingredient: Ingredient) => {},
  setIngredients: (newIngredients: Ingredient[]) => {},
  clearIngredients: () => {},
  ingredients: [],
});
