import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ingredient } from '../types';
import { AppContext } from '../context';
import { Ionicons } from '@expo/vector-icons';
import { QueryScreenStack } from '../screens/QueryScreenStack';
import { MainInputScreenStack } from '../screens/MainInputScreenStack';
import { LogBox } from 'react-native';
import { registerRootComponent } from 'expo';
import http from '../http-common';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const App = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  const handleAddIngredient = (ingredient: Ingredient) => {
    const converted = {
      name: ingredient.name,
      brand: ingredient.brand,
      category: ingredient.category,
      placement: ingredient.placement,
      confection: ingredient.confection,
      expirationDate: ingredient.expirationDate,
      ripenessStatus: ingredient.ripenessStatus,
      open: ingredient.open,
      frozen: ingredient.frozen,
      barcode: ingredient.barcode,
    };

    http
      .post('/ingredients', converted)
      .then((res) => {
        res.data.expirationDate = res.data.expirationDate
          ? new Date(Date.parse(res.data.expirationDate))
          : null;
        setIngredients([...ingredients, res.data]);
      })
      .catch(console.error);
  };

  const handleClearIngredients = () => {
    http
      .delete('/ingredients')
      .then((res) => setIngredients([]))
      .catch(console.error);
  };

  const handleDeleteIngredient = (ingredient: Ingredient) => {
    http
      .delete(`/ingredients/${ingredient.id}`)
      .then((res) =>
        setIngredients(ingredients.filter((i) => i.id !== ingredient.id))
      )
      .catch(console.error);
  };

  const handleAppendIngredients = (newIngredients: Ingredient[]) => {
    newIngredients.forEach((ingredient) => handleAddIngredient(ingredient));
  };

  const handleUpdateIngredient = (
    oldIngredient: Ingredient,
    newIngredient: Ingredient
  ) => {
    console.log('Handle update called');
    http
      .put(`/ingredients/${oldIngredient.id}`, newIngredient)
      .then((res) => {
        setIngredients(
          ingredients.map((i) => (i.id == oldIngredient.id ? newIngredient : i))
        );
      })
      .catch(console.error);
  };

  useEffect(() => {
    http
      .get('/ingredients')
      .then((res) => {
        setIngredients(
          res.data.map((ingredient: any) => {
            const newIngredient: Ingredient = {
              id: ingredient._id,
              name: ingredient.name,
              brand: ingredient.brand,
              category: ingredient.category,
              placement: ingredient.placement,
              confection: ingredient.confection,
              expirationDate: ingredient.expirationDate
                ? new Date(Date.parse(ingredient.expirationDate))
                : null,
              ripenessStatus: ingredient.ripenessStatus,
              open: ingredient.open,
              frozen: ingredient.frozen,
              barcode: ingredient.barcode,
            };
            return newIngredient;
          })
        );
      })
      .catch(console.error);
  }, []);

  const Tab = createBottomTabNavigator();

  return (
    <AppContext.Provider
      value={{
        addIngredient: handleAddIngredient,
        deleteIngredient: handleDeleteIngredient,
        updateIngredient: handleUpdateIngredient,
        clearIngredients: handleClearIngredients,
        appendIngredients: handleAppendIngredients,
        ingredients: ingredients,
      }}
    >
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'MainInputScreenStack') {
                iconName = focused
                  ? 'ios-add-circle'
                  : 'ios-add-circle-outline';
              } else if (route.name === 'QueryScreenStack') {
                iconName = focused
                  ? 'ios-search-circle'
                  : 'ios-search-circle-outline';
              }
              // @ts-ignore
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen
            name='MainInputScreenStack'
            component={MainInputScreenStack}
          />
          <Tab.Screen name='QueryScreenStack' component={QueryScreenStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default registerRootComponent(App);
