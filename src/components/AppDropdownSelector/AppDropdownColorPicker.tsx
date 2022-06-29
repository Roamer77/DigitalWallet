import React, {FC, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CARD_COLORS} from '../../resources/colors';
import {AppDropdownSelector} from './AppDropdownSelector';

export interface IColorPickerPayload {
  data: string;
  cardColorName: string;
}

interface IAppDropdownColorPicker {
  title: string;
  style?: any;
  onItemSelected: (d: any) => void;
  colors: IColorPickerPayload[];
}

interface IColorRec {
  data: string;
}
const ColorRec: FC<IColorRec> = ({data}) => {
  return <View style={{...reactViewStyles.container, backgroundColor: data}} />;
};

export const AppDropdownColorPicker: FC<IAppDropdownColorPicker> = ({
  title,
  style,
  onItemSelected,
  colors,
}) => {
  const [selectedItem, setSelectedItem] = useState(colors[0]);

  const handleItemSelected = (payload: any) => {
    setSelectedItem(payload);
    onItemSelected(payload);
  };
  return (
    <View style={{...styles.container, ...style}}>
      <Text style={styles.text}>{title}</Text>
      <AppDropdownSelector
        data={colors}
        onItemPress={handleItemSelected}
        RenderItem={ColorRec}
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
