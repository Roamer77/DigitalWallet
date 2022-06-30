import React, {FC, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {COLORS} from '../../resources/colors';
import {Circle} from './Circle';

interface ITargetPrompt {
  show: boolean;
  onPress: () => void;
}

export const TargetPrompt: FC<ITargetPrompt> = ({show, onPress, children}) => {
  const opacity = useSharedValue(0);
  const style = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));
  useEffect(() => {
    opacity.value = 1;
  }, []);
  return (
    <Animated.View style={[styles.container, style]}>
      <Circle
        mainCircleColor={COLORS.promptMainCircleColor}
        secondaryCircleColor={COLORS.promptSecondaryCircleColor}
        text= {'Super-puper advice'}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
