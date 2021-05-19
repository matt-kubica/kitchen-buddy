import 'react-native-gesture-handler';
import React, { useContext, useState } from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { AppContext } from '../context';

enableScreens(false);

const Item = ({ name }: { name: string }) => {
  return (
    <View style={styles.item}>
      <Text>{name}</Text>
    </View>
  );
};

const InputScreen = () => {
  const [ingredientName, setIngredientName] = useState<string>('');
  const { addIngredient } = useContext(AppContext);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: 'black' }}>Input Screen</Text>
      <TextInput
        onChangeText={setIngredientName}
        value={ingredientName}
        onSubmitEditing={() => {
          ingredientName !== '' ? addIngredient(ingredientName) : null;
          setIngredientName('');
        }}
        returnKeyType={'done'}
        style={styles.input}
      />
    </SafeAreaView>
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
        renderItem={({ item }) =>
          item.toUpperCase().startsWith(searchedName.toUpperCase()) ? (
            <Item name={item} />
          ) : (
            <View />
          )
        }
        style={{ width: '100%', marginTop: 24 }}
      />
      <Button title={'Clear Ingredients'} onPress={clearIngredients} />
    </View>
  );
};

const App = () => {
  const [ingredients, setIngredients] = useState<string[]>([
    'tomato',
    'potato',
    'carrot',
  ]);

  const handleAddIngredient = (ingredient: string) => {
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
      }}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="InputScreen" component={InputScreen} />
          <Tab.Screen name="QueryScreen" component={QueryScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: 48,
    flex: 1,
    backgroundColor: Colors.lighter,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    padding: 8,
    width: '100%',
  },
  input: {
    height: 40,
    paddingHorizontal: 4,
    borderRadius: 2,
    backgroundColor: 'white',
    marginVertical: 12,
    width: '80%',
  },
  item: {
    alignSelf: 'center',
    height: 'auto',
    backgroundColor: 'white',
    width: '80%',
    marginVertical: 4,
    borderRadius: 6,
    padding: 12,
  },
});
