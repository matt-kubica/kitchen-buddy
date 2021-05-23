import { createContext } from 'react';
import { Ingredient, AppContextProps } from './types';

export const AppContext = createContext<Partial<AppContextProps>>({
  addIngredient: (ingredient: Ingredient) => {},
  clearIngredients: () => {},
  ingredients: [],
});
