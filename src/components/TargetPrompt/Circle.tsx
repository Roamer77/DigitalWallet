import React, {FC, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

interface ICircle {
  mainCircleColor: string;
  secondaryCircleColor: string;
  text: string;
}

export const Circle: FC<ICircle> = ({
  mainCircleColor,
  secondaryCircleColor,
  text,
}) => {
  const scale = useSharedValue(0);
  const secondaryScale = useSharedValue(1);
  const mainCircle = useAnimatedStyle(() => ({
    transform: [{scale: withTiming(scale.value)}],
  }));

  const secondaryCircle = useAnimatedStyle(() => ({
    transform: [{scale: secondaryScale.value}],
  }));

  useEffect(() => {
    scale.value = 1.3;
    secondaryScale.value = withSequence(
      withTiming(1.2),
      withRepeat(withTiming(1.3, {duration: 1000}), 10, true),
      withTiming(1.2),
    );
  }, []);
  return (
    <Animated.View
      style={[
        styles.mainCircle,
        mainCircle,
        {backgroundColor: mainCircleColor},
      ]}>
      <Animated.View
        style={[
          styles.secondaryCircle,
          secondaryCircle,
          {backgroundColor: secondaryCircleColor},
        ]}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  mainCircle: {
    width: 250,
    height: 250,
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: 200,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'flex-end',
    right: -50,
    top: -50,
  },
  secondaryCircle: {
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 45,
    position: 'absolute',
    right: 40,
    top: 35,
  },
  textWrapper: {
    alignSelf: 'flex-start',
    width: '60%',
    paddingStart: 10,
    paddingTop: 30,
  },
  text: {
    fontSize: 13,
    color: '#fff',
  },
});
