import React, { useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { dummyIngredients, Ingredient } from './src/types';
import { AppContext } from './src/context';
import { InputScreen } from './src/components/InputScreen';
import { QueryScreen } from './src/components/QueryScreen';

const App = () => {
  const [ingredients, setIngredients] =
    useState<Ingredient[]>(dummyIngredients);

  const handleAddIngredient = (ingredient: Ingredient) => {
    setIngredients([...ingredients, ingredient]);
  };

  const handleClearIngredients = () => setIngredients([]);

  const Tab = createBottomTabNavigator();

  return (
    <AppContext.Provider
      value={{
        addIngredient: handleAddIngredient,
        clearIngredients: handleClearIngredients,
        ingredients: ingredients,
      }}
    >
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='InputScreen' component={InputScreen} />
          <Tab.Screen name='QueryScreen' component={QueryScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;
