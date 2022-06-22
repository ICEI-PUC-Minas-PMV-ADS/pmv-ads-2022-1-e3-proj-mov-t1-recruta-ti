import React from 'react';
import { StyleSheet, View } from 'react-native';

const AvatarSection = ({ children }) => {
  return (
      <View style={styles.container}>
        {children}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: '#d0ecec',
    margin: 8,
  },
});

export default AvatarSection;
