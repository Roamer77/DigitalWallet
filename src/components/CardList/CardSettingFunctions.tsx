import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface ICardSettingFunctions {
  animHeight: SharedValue<number>;
  translateY: SharedValue<number>;
  opacity: SharedValue<number>;
}

export const CardSettingFunctions: FC<ICardSettingFunctions> = ({
  animHeight,
  translateY,
  opacity,
}) => {
  const detailesFunctionsAnimStyle = useAnimatedStyle(() => ({
    height: withTiming(animHeight.value, {duration: 450}),
    transform: [{translateY: withTiming(translateY.value, {duration: 450})}],
    opacity: withTiming(opacity.value, {duration: 300}),
  }));

  return (
    <Animated.View
      style={[styles.detailesFunctions, detailesFunctionsAnimStyle]}>
      <Text>Functions</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  detailesFunctions: {
    width: '100%',
    height: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDBB8',
    borderRadius: 10,
    marginTop: 10,
  },
});
