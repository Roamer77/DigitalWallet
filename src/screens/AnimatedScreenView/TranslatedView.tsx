import {useFocusEffect} from '@react-navigation/native';
import React, {FC} from 'react';
import {Dimensions, SafeAreaView, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface ITranslatedView {
  inverse?: boolean;
  animatedStyles?: any;
}

export const TranslatedView: FC<ITranslatedView> = ({
  inverse = true,
  children,
  animatedStyles,
}) => {
  const translateXAnimation = useSharedValue(Dimensions.get('window').width);

  const animatedStyles1 = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: withTiming(translateXAnimation.value, {duration: 400})},
      ],
    };
  });

  useFocusEffect(() => {
    translateXAnimation.value = 0;
    return () =>
      (translateXAnimation.value = inverse
        ? Dimensions.get('window').width
        : -Dimensions.get('window').width);
  });
  const AnimatedSaveAreaView = Animated.createAnimatedComponent(SafeAreaView);
  return (
    <AnimatedSaveAreaView
      style={[animatedStyles1, styles.container, animatedStyles]}>
      {children}
    </AnimatedSaveAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
