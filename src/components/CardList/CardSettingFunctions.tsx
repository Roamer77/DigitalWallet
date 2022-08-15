import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {COLORS} from '../../resources/colors';
import {AppIconButton} from '../AppIconButton/AppIconButton';

interface ICardSettingFunctions {
  animHeight: SharedValue<number>;
  translateY: SharedValue<number>;
  opacity: SharedValue<number>;
}
const functions = [
  {
    id: 0,
    icon: require('../../assets/InteractiveFunction/therdFunction.png'),
  },
  {
    id: 1,
    icon: require('../../assets/InteractiveFunction/secondFunction.png'),
  },
  {
    id: 2,
    icon: require('../../assets/InteractiveFunction/firstFunction.png'),
  },
  {
    id: 3,
    icon: require('../../assets/InteractiveFunction/secondFunction.png'),
  },
  {
    id: 4,
    icon: require('../../assets/InteractiveFunction/therdFunction.png'),
  },
  {
    id: 5,
    icon: require('../../assets/InteractiveFunction/secondFunction.png'),
  },
  {
    id: 6,
    icon: require('../../assets/InteractiveFunction/firstFunction.png'),
  },
  {
    id: 7,
    icon: require('../../assets/InteractiveFunction/secondFunction.png'),
  },
];
const functionIconWidth = 50;
const functionIconHeight = 50;
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
  const functionsIconsAnimStyle = useAnimatedStyle(() => ({
    opacity: withTiming(opacity.value, {duration: 300}),
  }));
  return (
    <Animated.View
      style={[styles.detailesFunctions, detailesFunctionsAnimStyle]}>
      {functions.map(item => (
        <Animated.View
          style={[styles.functionsWrapper, functionsIconsAnimStyle]}>
          <AppIconButton
            key={item.id}
            icon={item.icon}
            width={functionIconWidth}
            height={functionIconHeight}
            onPress={() => {}}
            styles={styles.functionIcon}
          />
          <Text style={styles.functionTitle}> Super name</Text>
        </Animated.View>
      ))}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  detailesFunctions: {
    width: '100%',
    height: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#FFDBB8',
    borderRadius: 10,
    marginTop: 10,
  },
  functionsWrapper: {
    paddingTop: 50,
  },
  functionIcon: {
    width: 70,
    height: 70,
    marginStart: 10,
  },
  functionTitle: {
    color: COLORS.secondaryTextColor,
  },
});
