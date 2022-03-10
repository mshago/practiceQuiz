import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export const Button = ({
  title = 'Button',
  backgroundColor = 'dodgerblue',
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor}]}
      {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'dodgerblue',
    marginVertical: 10,
    padding: 15,
    minHeight: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    color: '#fff',
  },
});

