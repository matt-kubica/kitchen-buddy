export const BACKEND_HOST = '192.168.1.121';

export type AppContextProps = {
  addIngredient: (ingredient: Ingredient) => void;
  updateIngredient: (
    oldIngredient: Ingredient,
    newIngredient: Ingredient
  ) => void;
  clearIngredients: () => void;
  deleteIngredient: (ingredient: Ingredient) => void;
  appendIngredients: (newIngredients: Ingredient[]) => void;
  ingredients: Ingredient[];
};

export type Category =
  | 'fruit'
  | 'vegetable'
  | 'dairy'
  | 'fish'
  | 'meat'
  | 'liquid';

export type Placement = 'fridge' | 'freezer' | 'pantry';

export type Confection = 'fresh' | 'canned' | 'frozen' | 'cured';

export type Ripeness = 'green' | 'ripe' | 'advanced' | 'overripe';

export type RipenessStatus = {
  ripeness: Ripeness | null;
  date: Date | null;
};

export type Ingredient = {
  id: string;
  name: string;
  brand: string | null;
  category: Category | null;
  placement: Placement | null;
  confection: Confection | null;
  expirationDate: Date | null;
  ripenessStatus: RipenessStatus | null;
  open: boolean;
  frozen: boolean;
  barcode: string | null;
};
