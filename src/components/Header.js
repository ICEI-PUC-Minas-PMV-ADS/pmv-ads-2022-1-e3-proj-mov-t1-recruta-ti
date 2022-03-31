import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';

const Header = ({ title, goBack, children }) => {
  return (
    <Appbar.Header style={styles.header} >
      {goBack && <Appbar.BackAction onPress={goBack} />}
      <Appbar.Content title={title} />
      {children}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#049c9c',
  },
});

export default Header;
