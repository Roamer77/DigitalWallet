import {useFocusEffect} from '@react-navigation/native';
import React, {FC} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface IFadeInView {}

export const FadeInView: FC<IFadeInView> = ({children}) => {
  const opacityAnimated = useSharedValue(0.8);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacityAnimated.value),
    };
  });

  useFocusEffect(() => {
    opacityAnimated.value = 1;
    return () => (opacityAnimated.value = 0.8);
  });
  const AnimatedSaveAreaView = Animated.createAnimatedComponent(SafeAreaView);

  return (
    <AnimatedSaveAreaView style={[animatedStyles, styles.container]}>
      {children}
    </AnimatedSaveAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
