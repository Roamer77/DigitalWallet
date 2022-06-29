import React, {FC, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface IWave {
  activeTabIndex: number;
  index: number;
}
const waveSize = 50;
export const Wave: FC<IWave> = ({activeTabIndex, index}) => {
  const isActive = activeTabIndex === index ? true : false;
  const opacity = useSharedValue(1);
  const scale = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => ({
    opacity: withTiming(opacity.value,{duration: 400}),
    transform: [{scale: withTiming(scale.value, {duration: 400})}],
  }));
  useEffect(() => {
    if (isActive) {
      opacity.value = 0;
      scale.value = 1;
      console.log('isActive', isActive);
    } else {
      opacity.value = 1;
      scale.value = 0;
      console.log('isActive', false);
    }
  }, [isActive, opacity, scale]);
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.wave, animatedStyles]} />
    </View>
  );
};

const styles = StyleSheet.create({
  wave: {
    width: waveSize,
    height: waveSize,
    borderWidth: 10,
    borderColor: '#FFC999',
    borderRadius: waveSize / 2,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
