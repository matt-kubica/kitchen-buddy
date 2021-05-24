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
    confection: 'fresh',
    expirationDate: new Date(2021, 4, 23),
    ripenessStatus: null,
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
    confection: 'canned',
    expirationDate: new Date(2021, 4, 28),
    ripenessStatus: null,
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
    confection: 'fresh',
    expirationDate: new Date(2021, 4, 29),
    ripenessStatus: null,
    open: false,
    frozen: false,
    barcode: null,
  },
  {
    id: 4,
    name: 'Potato',
    brand: 'Your Vegetables Inc.',
    category: 'vegetable',
    placement: 'pantry',
    confection: 'fresh',
    expirationDate: new Date(2021, 4, 29),
    ripenessStatus: null,
    open: false,
    frozen: false,
    barcode: null,
  },
  {
    id: 5,
    name: 'Salad',
    brand: 'Your Vegetables Inc.',
    category: 'vegetable',
    placement: 'fridge',
    confection: 'fresh',
    expirationDate: new Date(2021, 4, 29),
    ripenessStatus: null,
    open: false,
    frozen: false,
    barcode: null,
  },
  {
    id: 6,
    name: 'Strawberries',
    brand: 'Your Fruits Inc.',
    category: 'fruit',
    placement: 'freezer',
    confection: 'frozen',
    expirationDate: null,
    ripenessStatus: null,
    open: false,
    frozen: false,
    barcode: null,
  },
  {
    id: 7,
    name: 'Corn',
    brand: 'Your Vegetables Inc.',
    category: 'vegetable',
    placement: 'pantry',
    confection: 'canned',
    expirationDate: null,
    ripenessStatus: null,
    open: false,
    frozen: false,
    barcode: null,
  },
  {
    id: 8,
    name: 'Beans',
    brand: 'Your Vegetables Inc.',
    category: 'vegetable',
    placement: 'pantry',
    confection: 'canned',
    expirationDate: null,
    ripenessStatus: null,
    open: false,
    frozen: false,
    barcode: null,
  },
  {
    id: 9,
    name: 'Salmon',
    brand: 'Sea Steve',
    category: 'fish',
    placement: 'freezer',
    confection: 'frozen',
    expirationDate: null,
    ripenessStatus: null,
    open: false,
    frozen: false,
    barcode: null,
  },
  {
    id: 10,
    name: 'Shrimps',
    brand: 'Sea Steve',
    category: 'fish',
    placement: 'freezer',
    confection: 'frozen',
    expirationDate: null,
    ripenessStatus: null,
    open: false,
    frozen: false,
    barcode: null,
  },
  {
    id: 11,
    name: 'Steak',
    brand: 'Meatzzz',
    category: 'meat',
    placement: 'fridge',
    confection: 'fresh',
    expirationDate: new Date(29, 4, 2021),
    ripenessStatus: null,
    open: false,
    frozen: false,
    barcode: null,
  },
  {
    id: 12,
    name: 'Pork Ribs',
    brand: 'Meatzzz',
    category: 'meat',
    placement: 'fridge',
    confection: 'fresh',
    expirationDate: new Date(29, 4, 2021),
    ripenessStatus: null,
    open: false,
    frozen: false,
    barcode: null,
  },
  {
    id: 13,
    name: 'Spaghetti Pasta',
    brand: 'Mariano Italiano 🤌🏻',
    category: null,
    placement: 'pantry',
    confection: 'cured',
    expirationDate: null,
    ripenessStatus: null,
    open: false,
    frozen: false,
    barcode: null,
  },
  {
    id: 14,
    name: 'Grana Padano',
    brand: 'Mariano Italiano 🤌🏻',
    category: 'dairy',
    placement: 'fridge',
    confection: 'fresh',
    expirationDate: null,
    ripenessStatus: null,
    open: false,
    frozen: false,
    barcode: null,
  },
  {
    id: 15,
    name: 'Milk',
    brand: 'Good Old Farm',
    category: 'dairy',
    placement: 'fridge',
    confection: 'fresh',
    expirationDate: null,
    ripenessStatus: null,
    open: false,
    frozen: false,
    barcode: null,
  },
  {
    id: 16,
    name: 'Orange Juice',
    brand: 'Sunny Paradise',
    category: 'liquid',
    placement: 'fridge',
    confection: 'fresh',
    expirationDate: null,
    ripenessStatus: null,
    open: false,
    frozen: false,
    barcode: null,
  },
  {
    id: 17,
    name: 'Apple Juice',
    brand: 'Sunny Paradise',
    category: 'liquid',
    placement: 'fridge',
    confection: 'fresh',
    expirationDate: null,
    ripenessStatus: null,
    open: false,
    frozen: false,
    barcode: null,
  },
  {
    id: 18,
    name: 'Blackberry Juice',
    brand: 'Sunny Paradise',
    category: 'liquid',
    placement: 'fridge',
    confection: 'fresh',
    expirationDate: null,
    ripenessStatus: null,
    open: false,
    frozen: false,
    barcode: null,
  },
];
