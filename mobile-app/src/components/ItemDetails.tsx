import { Text } from "react-native";
import React from "react";
import { RouteProp } from "@react-navigation/native";
import { Ingredient } from "../types";

type ParamList = { ItemDetails: { ingredient: Ingredient } }
export const ItemDetails = ({ route }: {route: RouteProp<ParamList, 'ItemDetails'>}) => {
  const { ingredient } = route.params;
  return (
    <Text>{ingredient.name}</Text>
  )
}
