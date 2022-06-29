import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {VerticalDots} from './VerticalDots';

interface IActionButton {
  onPress: () => void;
}

export const ActionButton: FC<IActionButton> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <VerticalDots />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
