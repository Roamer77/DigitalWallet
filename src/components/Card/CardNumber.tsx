import React, {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface ICardNumber {
  cardNumber: number[];
}

export const CardNumber: FC<ICardNumber> = ({cardNumber}) => {
  return (
    <View style={styles.container}>
      {cardNumber.map((item, index) => (
        <Text key={index} style={styles.numberPart}>
          {item}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  numberPart: {
    fontSize: 25,
  },
});
