import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

const Body = ({ children }) => {
  return (
    <ScrollView  >
      <View style={styles.container}>
        {children}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0ecec',
    margin: 8,
  },
});

export default Body;
