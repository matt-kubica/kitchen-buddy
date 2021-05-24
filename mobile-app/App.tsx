import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { dummyIngredients, Ingredient } from './src/types';
import { AppContext } from './src/context';
import { InputScreen } from './src/components/InputScreen';
import { QueryScreen } from './src/components/QueryScreen';
import { Ionicons } from "@expo/vector-icons";
import { QueryScreenStack } from "./src/components/QueryScreenStack";
import { InputScreenStack } from "./src/components/InputScreenStack";


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
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'InputScreen') {
                iconName = focused
                  ? 'ios-add-circle'
                  : 'ios-add-circle-outline';
              } else if (route.name === 'QueryScreen') {
                iconName = focused
                  ? 'ios-search-circle'
                  : 'ios-search-circle-outline';
              }
              // @ts-ignore
              return <Ionicons name={iconName} size={size} color={color} />;
            }
          })}
        >
          <Tab.Screen name='InputScreen' component={InputScreenStack} />
          <Tab.Screen name='QueryScreen' component={QueryScreenStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;
