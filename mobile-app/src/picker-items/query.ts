import { Category, Placement } from '../types';

export type QueryType =
  | 'expiring-in'
  | 'missing-data'
  | 'added-within'
  | 'same-placement'
  | 'same-category';
export type QueryTypeItem = { label: string; value: QueryType };
export const queryTypeItems: QueryTypeItem[] = [
  { label: 'expiring in', value: 'expiring-in' },
  { label: 'missing data', value: 'missing-data' },
  { label: 'added within', value: 'added-within' },
  { label: 'same placement', value: 'same-placement' },
  { label: 'same category', value: 'same-category' },
];

export type ShortPeriod = '1d' | '3d' | '7d' | '14d' | '28d';
export type ShortPeriodItem = { label: string; value: ShortPeriod };
export const shortPeriodItems: ShortPeriodItem[] = [
  { label: '1 day', value: '1d' },
  { label: '3 days', value: '3d' },
  { label: '7 days', value: '7d' },
  { label: '14 days', value: '14d' },
  { label: '28 days', value: '28d' },
];

export type MissingData =
  | 'any'
  | 'brand'
  | 'category'
  | 'placement'
  | 'confection'
  | 'expirationDate'
  | 'ripenessStatus'
  | 'barcode';
export type MissingDataItem = { label: string; value: MissingData };
export const missingDataItems: MissingDataItem[] = [
  { label: 'brand', value: 'brand' },
  { label: 'category', value: 'category' },
  { label: 'placement', value: 'placement' },
  { label: 'confection', value: 'confection' },
  { label: 'expiration date', value: 'expirationDate' },
  { label: 'ripeness status', value: 'ripenessStatus' },
  { label: 'barcode', value: 'barcode' },
];

export type InnerPlacement = Placement | 'any';
export type PlacementItem = { label: string; value: InnerPlacement };
export const placementItems: PlacementItem[] = [
  { label: 'fridge', value: 'fridge' },
  { label: 'freezer', value: 'freezer' },
  { label: 'pantry', value: 'pantry' },
];

export type InnerCategory = Category | 'any';
export type CategoryItem = { label: string; value: InnerCategory };
export const categoryItems: CategoryItem[] = [
  { label: 'fruit', value: 'fruit' },
  { label: 'vegetable', value: 'vegetable' },
  { label: 'dairy', value: 'dairy' },
  { label: 'meat', value: 'meat' },
  { label: 'liquid', value: 'liquid' },
];
