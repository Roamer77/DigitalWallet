import React, {FC} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {COLORS} from '../../../resources/colors';
import {CurrencyTypes} from '../../Card/CurrencyTypes';

interface ITransferMoneyInput {
  currencyType: CurrencyTypes;
  style?: any;
}

export const TransferMoneyInput: FC<ITransferMoneyInput> = ({
  currencyType,
  style,
}) => {
  return (
    <View style={{...styles.container, ...style}}>
      <Text style={styles.header}> Amount: </Text>
      <View style={styles.input}>
        <TextInput placeholder="0.00" />
        <Text style={styles.currencyType}>{currencyType}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.inputBorderColor,
    width: 200,
    height: 25,
  },
  currencyType: {
    fontSize: 20,
    paddingEnd: 5,
  },
  header: {
    fontSize: 17,
    paddingBottom: 5,
  },
});
