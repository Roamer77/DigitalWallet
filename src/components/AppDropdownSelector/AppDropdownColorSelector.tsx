import React, {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {AppDropdownSelector} from './AppDropdownSelector';

interface IAppDropdownColorSelector {
  title: string;
  style?: any;
}

export const AppDropdownColorSelector: FC<IAppDropdownColorSelector> = ({
  title,
  style,
}) => {
  return (
    <View style={{...styles.container, ...style}}>
      <Text style={styles.text}>{title}</Text>
      <AppDropdownSelector
        data={CardTypes}
        defaultItem={selectedItem}
        onItemPress={setSelectedItem}
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
