import React, {FC} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {COLORS} from '../../../resources/colors';

interface IAppTextInput {
  title: string;
  placeholder: string;
  style?: any;
  text: string;
  onTextChange: (data: string) => void;
}

export const AppTextInput: FC<IAppTextInput> = ({
  title,
  placeholder,
  style,
  text,
  onTextChange,
}) => {
  return (
    <View style={style}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={text}
        onChangeText={onTextChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 16,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.modalBackgroundColor,
    paddingTop: 5,
  },
});
