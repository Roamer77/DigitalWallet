import React, {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {AppIconButton} from '../AppIconButton/AppIconButton';
import {TargetPrompt} from '../TargetPrompt/TargetPrompt';
import {AppHeader} from './AppHeader';

interface IAppHeaderWithActionButton {
  onPress: () => void;
  style?: any;
  title: string;
}

export const AppHeaderWithActionButton: FC<IAppHeaderWithActionButton> = ({
  onPress,
  style,
  title,
}) => {
  return (
    <View style={{...styles.container, ...style}}>
      <AppHeader text={title} size={24} color={'#111'} style={styles.header} />
      <AppIconButton
        onPress={onPress}
        icon={require('../../assets/CardList/addCard.png')}
        width={40}
        height={40}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  header: {
    paddingStart: 10,
    alignSelf: 'center',
  },
});
