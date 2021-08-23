import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainInputScreen } from './MainInputScreen';

export const MainInputScreenStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'MainInputScreen'}
        component={MainInputScreen}
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
