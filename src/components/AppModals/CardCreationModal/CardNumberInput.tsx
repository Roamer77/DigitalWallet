import React, {FC, useEffect, useState} from 'react';
import {Text, View, StyleSheet, TextInput, Dimensions} from 'react-native';
import {COLORS} from '../../../resources/colors';

interface ICardNumberInput {
  style?: any;
  numbers: number[];
  onTextChange: (data: number[]) => void;
}

export const CardNumberInput: FC<ICardNumberInput> = ({
  style,
  numbers,
  onTextChange,
}) => {
  //todo  sectional input . 4 section to each part of card number

  const [part1, setPart1] = useState('');
  const [part2, setPart2] = useState('');
  const [part3, setPart3] = useState('');
  const [part4, setPart4] = useState('');
  useEffect(() => {
    if (
      part1.length === 4 &&
      part2.length === 4 &&
      part3.length === 4 &&
      part4.length === 4
    ) {
      let arr = [];
      arr.push(parseInt(part1, 10));
      arr.push(parseInt(part2, 10));
      arr.push(parseInt(part3, 10));
      arr.push(parseInt(part4, 10));
      onTextChange(arr);
    }
  }, [part1, part2, part3, part4, onTextChange]);
  return (
    <View style={{...style}}>
      <Text style={styles.title}>Card numbers:</Text>
      <View style={styles.inputs}>
        <TextInput
          maxLength={4}
          style={styles.textInput}
          placeholder="0000"
          value={part1}
          onChangeText={setPart1}
        />
        <TextInput
          maxLength={4}
          style={styles.textInput}
          placeholder="0000"
          value={part2}
          onChangeText={setPart2}
        />
        <TextInput
          maxLength={4}
          style={styles.textInput}
          placeholder="0000"
          value={part3}
          onChangeText={setPart3}
        />
        <TextInput
          maxLength={4}
          style={styles.textInput}
          placeholder="0000"
          value={part4}
          onChangeText={setPart4}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.modalBackgroundColor,
    paddingTop: 5,
    fontSize: 20,
  },
  inputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
