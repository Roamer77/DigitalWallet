import React, {FC} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {COLORS} from '../../../resources/colors';

interface ITransferComment {
  style?: any;
}

export const TransferComment: FC<ITransferComment> = ({style}) => {
  return (
    <View style={{...styles.container, ...style}}>
      <Text style={styles.header}> Comment to transfer:</Text>
      <TextInput style={styles.input} placeholder="Write smth" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    width: 200,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.inputBorderColor,
  },
  header: {
    fontSize: 15,
  },
});
