import React, {cloneElement, FC, useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Animated, {
  FadeInLeft,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Wave} from './Wave';

interface ITab {
  onPress: () => void;
  index: number;
  activeIndex: number;
}

export const Tab: FC<ITab> = ({children, onPress, index, activeIndex}) => {
  const isActive = index === activeIndex ? true : false;
  const animWidth = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: withTiming(animWidth.value, {duration: 600}),
    };
  });
  const [direction, setDirection] = useState('ltr');
  useEffect(() => {
    if (isActive) {
      animWidth.value = 32;
      index < activeIndex ? setDirection('ltr') : setDirection(direction);
    } else {
      animWidth.value = 0;
      index > activeIndex ? setDirection('ltr') : setDirection('rtl');
    }
  }, [isActive]);
  // for android direction does not work . It is prefer to use alightItems flex-end  but for better view prefer to use Solid ICONS
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={{width: 70, height: 70, justifyContent:'center', alignItems:'center'}}>
      <Wave activeTabIndex={activeIndex} index={index} />
      <Animated.View style={[styles.content, {direction: direction}]}>
        <View style={StyleSheet.absoluteFill}>{children}</View>

        <Animated.View style={[{overflow: 'hidden'}, animatedStyles]}>
          {cloneElement(children, {isActive: true})}
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  content: {
    width: 32,
    height: 32,
  },
});
