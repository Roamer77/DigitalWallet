import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

interface IVerticalDots {}

export const VerticalDots: FC<IVerticalDots> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <View style={styles.circle} />
      <View style={styles.circle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  circle: {
    width: 7,
    height: 7,
    backgroundColor: '#111',
    borderRadius: 5,
  },
});
