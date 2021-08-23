import { styles } from '../styles';
import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

export const DeleteItemBtn = ({ deleteItem }: { deleteItem: () => void }) => {
  return (
    <TouchableOpacity onPress={deleteItem} style={styles.deleteButton}>
      <Text style={styles.deleteButtonText}>DELETE</Text>
    </TouchableOpacity>
  );
};
