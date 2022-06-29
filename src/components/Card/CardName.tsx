import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';

interface ICardName {
  name: string;
}

export const CardName: FC<ICardName> = ({name}) => {
  return <Text style={styles.name}> {name}</Text>;
};

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
  },
});
