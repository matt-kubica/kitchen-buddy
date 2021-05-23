import React, { useContext, useState } from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { dummyIngredients, Ingredient } from './src/types';
import { AppContext } from './src/context';
import { styles } from './src/styles';
import { InputScreen } from './src/components/InputScreen';

const Item = ({ ingredient }: { ingredient: Ingredient }) => {
  return (
    <View style={styles.item}>
      <Text>{ingredient.name}</Text>
    </View>
  );
};

const QueryScreen = () => {
  const [searchedName, setSearchedName] = useState('');
  const { clearIngredients, ingredients } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={{ color: 'black' }}>Query Screen</Text>
      <TextInput
        onChangeText={setSearchedName}
        value={searchedName}
        style={styles.input}
        placeholder={'filter by name...'}
        placeholderTextColor={'gray'}
      />
      <FlatList
        data={ingredients}
        keyExtractor={(item: Ingredient) => `${item.id}`}
        renderItem={({ item }) =>
          item.name.toUpperCase().startsWith(searchedName.toUpperCase()) ? (
            <Item ingredient={item} />
          ) : (
            <View />
          )
        }
        style={{ width: '100%', marginTop: 24 }}
      />
      {/*<Button title={'Clear Ingredients'} onPress={clearIngredients} />*/}
    </View>
  );
};

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
