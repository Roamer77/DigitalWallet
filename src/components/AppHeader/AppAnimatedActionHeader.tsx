import React, {FC, useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {AppHeaderWithActionButton} from '../AppHeader/AppHeaderWithActionButton';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {AppHeader} from './AppHeader';
import {AppInteractiveHeader} from './AppInteractiveHeader';
import {useAppSelector} from '../../store/hooks';
import {setIsSettingsHeaderOpened} from '../../store/redusers/appStateReducer';

interface IAppAnimatedActionHeader {
  onPress: () => void;
  style?: any;
}

export const AppAnimatedActionHeader: FC<IAppAnimatedActionHeader> = ({
  onPress,
  style,
}) => {
  const opacity = useSharedValue(0);
  const mainHeaderOpacity = useSharedValue(1);
  const rotationX = useSharedValue(0);
  const interactiveHeaderRotationX = useSharedValue(90);
  const {isSettingsHeaderOpen} = useAppSelector(store => store.appState);

  const mainHeader = useAnimatedStyle(() => ({
    transform: [{rotateX: `${rotationX.value}deg`}],
    opacity: mainHeaderOpacity.value,
  }));
  const interactiveHeaderStyle = useAnimatedStyle(() => ({
    transform: [{rotateX: `${interactiveHeaderRotationX.value}deg`}],
    opacity: opacity.value,
  }));

  useEffect(() => {
    handlePress(isSettingsHeaderOpen);
  }, [isSettingsHeaderOpen]);

  const handlePress = (headerOpen: boolean) => {
    rotationX.value = withTiming(headerOpen === true ? 90 : 0, {
      duration: 400,
    });
    interactiveHeaderRotationX.value = withTiming(
      headerOpen === true ? 0 : 90,
      {duration: 400},
    );
    opacity.value = withTiming(headerOpen === true ? 1 : 0);
    mainHeaderOpacity.value = withTiming(headerOpen === true ? 0 : 1);
  };
  return (
    <Animated.View style={styles.container}>
      <Animated.View style={[mainHeader, styles.container, style]}>
        <AppHeaderWithActionButton onPress={onPress} title={'Settings'} />
      </Animated.View>
      <Animated.View
        style={[
          styles.interactiveHeader,
          StyleSheet.absoluteFillObject,
          interactiveHeaderStyle,
        ]}>
        <AppInteractiveHeader />
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  interactiveHeader: {
    width: '100%',
    height: 60,
  },
});
function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
