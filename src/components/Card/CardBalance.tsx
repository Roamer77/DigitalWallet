import React, {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {CurrencyTypes} from './CurrencyTypes';

interface ICardBalance {
  balance: number;
  currencyType: CurrencyTypes;
}

export const CardBalance: FC<ICardBalance> = ({balance, currencyType}) => {
  return (
    <View>
      <Text style={styles.title}> Balance</Text>
      <Text style={styles.balance}>
        {' '}
        {balance} {currencyType}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 15,
  },
  balance: {
    fontSize: 20,
  },
});
