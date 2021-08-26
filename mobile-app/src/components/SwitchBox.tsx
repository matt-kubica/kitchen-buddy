import { StyleSheet, Switch, Text, View } from 'react-native';
import React from 'react';

export const SwitchBox = ({
  label,
  state,
  setState,
  disabled,
}: {
  label: string;
  state: boolean;
  setState: (state: boolean) => void;
  disabled: boolean;
}) => {
  return (
    <View style={innerStyles.container}>
      <Text style={innerStyles.label}>{label}</Text>
      <Switch value={state} onValueChange={setState} disabled={disabled} />
    </View>
  );
};

const innerStyles = StyleSheet.create({
  label: {
    height: 22,
    fontSize: 20,
    paddingHorizontal: 4,
    marginVertical: 4,
    flex: 10,
  },
  container: {
    marginVertical: 6,
    flexDirection: 'row',
  },
});
