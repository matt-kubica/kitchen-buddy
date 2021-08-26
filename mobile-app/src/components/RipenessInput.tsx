import {
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import { Ingredient, Ripeness, RipenessStatus } from '../types';
import { pickerStyle, styles } from '../styles';
import { default as Picker } from 'react-native-picker-select';
import {
  categoryItems,
  confectionItems,
  placementItems,
  ripenessItems,
} from '../picker-items/ingredient';
import { DateInput } from './DateInput';

export const RipenessInput = ({
  ripenessStatus,
  setRipenessStatus,
}: {
  ripenessStatus: RipenessStatus | null;
  setRipenessStatus: (ripenessStatus: RipenessStatus) => void;
}) => {
  const placeholderComponent = () => (
    <View style={{ width: '100%' }}>
      <Picker
        onValueChange={(ripeness) =>
          setRipenessStatus({
            ripeness: ripeness,
            date: new Date(Date.now()),
          })
        }
        items={ripenessItems}
        value={null}
        style={pickerStyle}
        placeholder={{ label: 'ripeness...', value: null }}
      />
    </View>
  );

  return ripenessStatus ? (
    ripenessStatus.date ? (
      <View style={{ flexDirection: 'row', width: '100%' }}>
        <View style={{ flex: 3, marginRight: 4 }}>
          <Picker
            onValueChange={(ripeness) =>
              setRipenessStatus({ ...ripenessStatus, ripeness })
            }
            items={ripenessItems}
            value={ripenessStatus.ripeness}
            style={pickerStyle}
            placeholder={{ label: 'ripeness...', value: null }}
          />
        </View>
        <View style={{ flex: 7 }}>
          <DateInput
            date={ripenessStatus.date}
            setDate={(date) => setRipenessStatus({ ...ripenessStatus, date })}
            placeholder={'date...'}
          />
        </View>
      </View>
    ) : (
      placeholderComponent()
    )
  ) : (
    placeholderComponent()
  );
};
