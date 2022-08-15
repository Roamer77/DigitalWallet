import React, {
  Children,
  FC,
  useCallback,
  useEffect,
  useImperativeHandle,
} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {COLORS} from '../../resources/colors';

interface IBottomSheet {
  children?: React.ReactNode;
}
export type BottomSheetRefProps = {
  scrollTo: (destination: number) => void;
  isActive: () => boolean;
};

const SCREEN_HEIGHT = Dimensions.get('window').height;
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;
export const BottomSheet = React.forwardRef<BottomSheetRefProps, IBottomSheet>(
  ({children}, ref) => {
    const translateY = useSharedValue(0);
    const context = useSharedValue({y: 0});
    const active = useSharedValue(false);
    const scrollTo = useCallback((destination: number) => {
      'worklet';
      active.value = destination !== 0;
      translateY.value = withSpring(destination, {damping: 50});
    }, []);
    const isActive = useCallback(() => {
      return active.value;
    }, []);

    useImperativeHandle(ref, () => ({scrollTo, isActive}), [
      scrollTo,
      isActive,
    ]);
    const gesture = Gesture.Pan()
      .onStart(() => {
        context.value = {y: translateY.value};
      })
      .onUpdate(event => {
        translateY.value = event.translationY + context.value.y;
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
      })
      .onEnd(() => {
        if (translateY.value > -SCREEN_HEIGHT / 3) {
          scrollTo(0);
        } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
          scrollTo(MAX_TRANSLATE_Y);
        }
      });
    const rBottomSheetStyle = useAnimatedStyle(() => {
      const borderRadius = interpolate(
        translateY.value,
        [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
        [25, 5],
        Extrapolate.CLAMP, // fix edge of every range value
      );
      return {
        transform: [{translateY: translateY.value}],
        borderRadius,
      };
    });

    return (
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.wrapper, rBottomSheetStyle]}>
          <View style={styles.line} />
          {children}
        </Animated.View>
      </GestureDetector>
    );
  },
);

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: SCREEN_HEIGHT,
    backgroundColor: COLORS.bottomSheetBackgroundColor,
    position: 'absolute',
    top: SCREEN_HEIGHT,
    borderRadius: 25,
  },
  line: {
    width: 105,
    height: 4,
    marginVertical: 10,
    backgroundColor: COLORS.bottomSheetLineColor,
    alignSelf: 'center',
  },
});
