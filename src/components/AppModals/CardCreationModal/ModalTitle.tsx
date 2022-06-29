import React, {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface IModalTitle {
  title: string;
  style?: any;
}

export const ModalTitle: FC<IModalTitle> = ({title, style}) => {
  return (
    <View style={{...style}}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
  },
});
