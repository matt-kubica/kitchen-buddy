import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { QueryScreen } from "./QueryScreen";
import { ItemDetails } from "./ItemDetails";
import { InputScreen } from "./InputScreen";


export const InputScreenStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"InputScreen"}
        component={InputScreen}
        options={{
          title: 'Input Screen',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 36,
          }
        }}
      />
    </Stack.Navigator>
  )
}
