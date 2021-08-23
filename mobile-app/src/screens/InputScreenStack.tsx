import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainInput } from '../components/MainInput';

export const InputScreenStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'InputScreen'}
        component={MainInput}
        options={{
          title: 'Input Screen',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 36,
          },
        }}
      />
    </Stack.Navigator>
  );
};
