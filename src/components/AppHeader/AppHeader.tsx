import React, {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface IAppHeader {
  text: string;
  size: number;
  color: string;
  style?: any;
}

export const AppHeader: FC<IAppHeader> = ({style, text, size, color}) => {
  return (
    <View style={style}>
      <Text style={{fontSize: size, color: color, fontWeight: 'bold'}}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
