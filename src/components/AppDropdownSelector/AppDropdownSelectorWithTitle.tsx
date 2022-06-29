import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppDropdownSelector} from './AppDropdownSelector';

interface IAppDropdownSelectorWithTitle {
  title: string;
  style?: any;
  selectedItem: any;
  onItemSelected: (d: any) => void;
  data: any[];
}

interface IAppText {
  data: string;
}
const AppText: FC<IAppText> = ({data}) => {
  return <Text>{data}</Text>;
};

export const AppDropdownSelectorWithTitle: FC<
  IAppDropdownSelectorWithTitle
> = ({title, style, data, selectedItem, onItemSelected}) => {
  return (
    <View style={{...styles.container, ...style}}>
      <Text style={styles.text}>{title}</Text>
      <AppDropdownSelector
        data={data}
        onItemPress={onItemSelected}
        RenderItem={AppText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 17,
    alignSelf: 'center',
  },
});

const reactViewStyles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
  },
});
