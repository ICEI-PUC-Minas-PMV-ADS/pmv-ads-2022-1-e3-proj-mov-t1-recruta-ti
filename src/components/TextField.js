import React, { Children } from 'react';
import { StyleSheet,Text } from 'react-native';

const TextField = (props) => {
  return (
    <Text style={styles.text} {...props} >{Children}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: '#FFF',
    marginBottom: 8,
  },
});

export default TextField;
