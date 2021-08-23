import { styles } from "../styles";
import { Text, TouchableOpacity } from "react-native";
import React from "react";

export const DeleteAllBtn = ({ deleteAll } : { deleteAll: () => void }) => {
  return (
    <TouchableOpacity onPress={deleteAll} style={styles.deleteButton}>
      <Text style={styles.deleteButtonText}>DELETE ALL</Text>
    </TouchableOpacity>
  );
};
