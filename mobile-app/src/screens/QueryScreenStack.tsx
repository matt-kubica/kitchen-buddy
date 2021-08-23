import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { QueryScreen } from './QueryScreen';
import { ItemDetailsScreen } from './ItemDetailsScreen';

export const QueryScreenStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'QueryScreen'}
        component={QueryScreen}
        options={{
          title: 'Query Screen',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 36,
          },
        }}
      />
      <Stack.Screen
        name={'ItemDetailsScreen'}
        component={ItemDetailsScreen}
        options={{
          title: 'Item Details',
          headerTitleAlign: 'left',
          headerLeft: () => null,
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 36,
          },
        }}
      />
    </Stack.Navigator>
  );
};
