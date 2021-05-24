import React, { useEffect, useState } from 'react';
import { View, Button, Text, Pressable, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from '../styles';

export const DateInput = ({
  date,
  setDate,
  placeholder,
}: {
  date: Date | null;
  setDate: (arg: Date | null) => void;
  placeholder: string;
}) => {
  const [pickerVisibility, setPickerVisibility] = useState<boolean>(false);

  const onChange = (event: Event, selectedDate?: Date | undefined) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const discardDate = () => {
    setPickerVisibility(false);
    setDate(null);
  };

  return (
    <Pressable onPress={() => setPickerVisibility(true)}>
      <View style={{ flexDirection: 'row', ...styles.input }}>
        {pickerVisibility ? (
          <View style={{ flexDirection: 'row', width: '100%' }}>
            <DateTimePicker
              value={date ? date : new Date()}
              mode='date'
              display='compact'
              // @ts-ignore
              onChange={(event, date) => onChange(event, date)}
              style={dateInputStyles.picker}
              minimumDate={new Date()}
            />
            <View style={dateInputStyles.button}>
              <Button title={'x'} onPress={() => discardDate()} color={'red'} />
            </View>
          </View>
        ) : (
          <Text style={dateInputStyles.placeholder}>{placeholder}</Text>
        )}
      </View>
    </Pressable>
  );
};

const dateInputStyles = StyleSheet.create({
  picker: { width: '100%', marginTop: 'auto', marginBottom: 'auto' },
  button: {
    width: 25,
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: 0,
    marginLeft: 'auto',
  },
  placeholder: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 0,
    flex: 3,
    color: '#c4c4c4',
  },
});
