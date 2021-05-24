import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { dummyIngredients, Ingredient } from './types';
import { AppContext } from './context';
import { InputScreen } from './components/InputScreen';
import { QueryScreen } from './components/QueryScreen';
import { Ionicons } from '@expo/vector-icons';
import { QueryScreenStack } from './components/QueryScreenStack';
import { InputScreenStack } from './components/InputScreenStack';
import { LogBox } from 'react-native';
import { registerRootComponent } from "expo";

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const App = () => {
  const [ingredients, setIngredients] =
    useState<Ingredient[]>(dummyIngredients);

  const handleAddIngredient = (ingredient: Ingredient) => {
    setIngredients([...ingredients, ingredient]);
  };

  const handleClearIngredients = () => setIngredients([]);

  const handleSetIngredients = (newIngredients: Ingredient[]) => {
    setIngredients(newIngredients);
  };

  const Tab = createBottomTabNavigator();

  return (
    <AppContext.Provider
      value={{
        addIngredient: handleAddIngredient,
        clearIngredients: handleClearIngredients,
        setIngredients: handleSetIngredients,
        ingredients: ingredients,
      }}
    >
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
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
            },
          })}
        >
          <Tab.Screen name='InputScreen' component={InputScreenStack} />
          <Tab.Screen name='QueryScreen' component={QueryScreenStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default registerRootComponent(App);
