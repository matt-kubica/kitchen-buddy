import { Category, Confection, Placement } from '../types';

export type CategoryItem = { label: string; value: Category };
export const categoryItems: CategoryItem[] = [
  { label: 'fruit', value: 'fruit' },
  { label: 'vegetable', value: 'vegetable' },
  { label: 'dairy', value: 'dairy' },
  { label: 'fish', value: 'fish' },
  { label: 'meat', value: 'meat' },
  { label: 'liquid', value: 'liquid' },
];

export type PlacementItem = { label: string; value: Placement };
export const placementItems: PlacementItem[] = [
  { label: 'fridge', value: 'fridge' },
  { label: 'freezer', value: 'freezer' },
  { label: 'pantry', value: 'pantry' },
];

export type ConfectionItem = { label: string; value: Confection };
export const confectionItems: ConfectionItem[] = [
  { label: 'fresh', value: 'fresh' },
  { label: 'canned', value: 'canned' },
  { label: 'frozen', value: 'frozen' },
  { label: 'cured', value: 'cured' },
];
