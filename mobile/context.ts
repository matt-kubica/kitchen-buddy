import { createContext } from 'react';

export const AppContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addIngredient: (ingredients: string) => {},
  clearIngredients: () => {},
  ingredients: ['some-ingredient-1', 'some-ingredient-2', 'some-ingredient-3'],
});
