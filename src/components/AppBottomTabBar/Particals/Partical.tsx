import React, {FC, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface IPartical {
  particalIndex: number;
  activeTabIndex: number;
  tabAreaWidth: number;
  tabPadding: number;
  transitionType: string;
  style?: any;
}

export const Partical: FC<IPartical> = ({
  particalIndex,
  activeTabIndex,
  tabAreaWidth,
  tabPadding,
  transitionType,
  style,
}) => {
  const transition = useSharedValue(0);

  const topTransitin = useAnimatedStyle(() => ({
    opacity: interpolate(
      transition.value * particalIndex,
      [0, 0.2, 0.4, 0.6, 0.8, 1],
      [0, 0.4, 0.8, 1, 0.8, 0],
    ),
    transform: [
      {
        translateX: interpolate(
          transition.value * particalIndex,
          [0, 0.5, 1],
          [tabAreaWidth + tabPadding * 2, tabAreaWidth + tabPadding, 0],
        ),
      },
      {
        translateY: interpolate(
          transition.value * particalIndex,
          [0, 0.2, 0.4, 0.6, 0.9, 1],
          [15, 0, -5, -10, -5, 15],
        ),
      },
    ],
  }));
  const bottomTransitin = useAnimatedStyle(() => ({
    opacity: interpolate(
      transition.value * particalIndex,
      [0, 0.2, 0.4, 0.6, 0.8, 1],
      [0, 0.4, 0.8, 1, 0.8, 0],
    ),
    transform: [
      {
        translateX: interpolate(
          transition.value * particalIndex,
          [0, 0.5, 1],
          [tabAreaWidth + tabPadding * 2, tabAreaWidth + tabPadding, 0],
        ),
      },
      {
        translateY: interpolate(
          transition.value * particalIndex,
          [0, 0.2, 0.4, 0.6, 0.9, 1],
          [5, 10, 15, 25, 15, 5],
        ),
      },
    ],
  }));
  const middle = useAnimatedStyle(() => ({
    opacity: interpolate(
      transition.value * particalIndex,
      [0, 0.2, 0.4, 0.6, 0.8, 1],
      [0, 0.4, 0.8, 1, 0.8, 0],
    ),
    transform: [
      {
        translateX: interpolate(
          transition.value * particalIndex,
          [0, 0.5, 1],
          [tabAreaWidth + tabPadding * 2, tabAreaWidth + tabPadding, 0],
        ),
      },
    ],
  }));
  const getTransitionByType = (type: string) => {
    switch (type) {
      case 'top':
        return topTransitin;
      case 'middle':
        return middle;
      case 'bottom':
        return bottomTransitin;
      default:
        return middle;
    }
  };
  
  useEffect(() => {
    transition.value = withTiming(activeTabIndex === 1 ? 0 : 1, {
      duration: 500,
    });
  }, [activeTabIndex]);
  return (
    <Animated.View
      style={[
        {...styles.container, ...style},
        getTransitionByType(transitionType),
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: '#FFE4B5',
    position: 'absolute',
    top: 0,
    left: 5,
  },
});
