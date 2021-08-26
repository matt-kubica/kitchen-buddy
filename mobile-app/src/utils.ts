import { Ingredient } from './types';

export const prolong = (date: Date | null, months: number) => {
  const oldDate = date ? date : new Date(Date.now());
  return new Date(oldDate.setMonth(oldDate.getMonth() + months));
};

export const shorten = (date: Date | null, months: number) => {
  const oldDate = date ? date : new Date(Date.now());
  return new Date(oldDate.setMonth(oldDate.getMonth() - months));
};

export const determineExpirationDate = (ing: Ingredient) => {
  if (ing.frozen) return prolong(ing.expirationDate, 6);

  if (ing.open) {
    let shortly = new Date(Date.now());
    shortly.setDate(shortly.getDate() + 4);
    return shortly;
  }

  return ing.expirationDate ? ing.expirationDate : null;
};

export const determineRipenessStatus = (ing: Ingredient) => {
  return ing.ripenessStatus
    ? { ripeness: ing.ripenessStatus.ripeness, date: new Date(Date.now()) }
    : null;
};
