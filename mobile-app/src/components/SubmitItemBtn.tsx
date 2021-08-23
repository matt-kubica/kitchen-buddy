import { styles } from "../styles";
import { Text, TouchableOpacity } from "react-native";
import React from "react";


export const SubmitItemBtn = ({submit} : {
  submit: () => void;
}) => {
  return (
    <TouchableOpacity onPress={() => submit()} style={styles.submitButton}>
      <Text style={styles.submitButtonText}>SUBMIT</Text>
    </TouchableOpacity>
  );
};
