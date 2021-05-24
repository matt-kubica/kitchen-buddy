export type AppContextProps = {
  addIngredient: (ingredient: Ingredient) => void;
  clearIngredients: () => void;
  setIngredients: (newIngredients: Ingredient[]) => void;
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
  ripeness: Ripeness;
  date: Date;
};

export type Ingredient = {
  id: number;
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

// dummy objects
export const dummyIngredients: Ingredient[] = [
  {
    id: 1,
    name: 'Tomato',
    brand: 'Your Vegetables Inc.',
    category: 'vegetable',
    placement: 'pantry',
    confection: null,
    expirationDate: new Date(2021, 5, 23),
    ripenessStatus: {
      ripeness: 'ripe',
      date: new Date(),
    },
    open: false,
    frozen: false,
    barcode: null,
  },
  {
    id: 2,
    name: 'Carrot',
    brand: 'Your Vegetables Inc.',
    category: 'vegetable',
    placement: 'pantry',
    confection: null,
    expirationDate: new Date(2021, 5, 28),
    ripenessStatus: {
      ripeness: 'ripe',
      date: new Date(),
    },
    open: false,
    frozen: false,
    barcode: null,
  },
  {
    id: 3,
    name: 'Pumpkin',
    brand: 'Your Vegetables Inc.',
    category: 'vegetable',
    placement: 'pantry',
    confection: null,
    expirationDate: new Date(2021, 5, 30),
    ripenessStatus: {
      ripeness: 'ripe',
      date: new Date(),
    },
    open: false,
    frozen: false,
    barcode: null,
  },
];
