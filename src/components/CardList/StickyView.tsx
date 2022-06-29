import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Svg, {Path} from 'react-native-svg';

interface IStickyView {
  animWidth: any;
  animOpacity: any;
}
const AnimatedPath = Animated.createAnimatedComponent(Path);

export const StickyView: FC<IStickyView> = ({animWidth, animOpacity}) => {
  const viewWidth = useDerivedValue(() => {
    return withSpring(animWidth.value, {damping: 5, stiffness: 200});
  }, []);

  const opacity = useDerivedValue(() => {
    return withTiming(animOpacity.value);
  }, []);

  const firstLineEndY = 13;

  const animatedProps = useAnimatedProps(() => {
    const path = `M 0 0 C 12 34, ${viewWidth.value} 30 ,${
      viewWidth.value
    } ${firstLineEndY} Q  ${viewWidth.value - 10} 20 ${viewWidth.value} 39 C ${
      viewWidth.value
    } 25, 6 30, 0 60 L 0 0`;
    return {
      d: path,
    };
  });
  const animatedCirclePros = useAnimatedStyle(() => {
    return {
      transform: [{translateX: viewWidth.value}],
    };
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <View style={styles.container} pointerEvents="none">
      <Animated.View style={[animatedStyle]}>
        <Svg width={170} height={60} fill="#FFE4B5">
          <AnimatedPath animatedProps={animatedProps} />
          <AnimatedPath
            style={animatedCirclePros}
            y={10}
            x={-10}
            scale={1}
            d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.151 17.943-4.143-4.102L7.891 18l-1.833-1.833 4.104-4.157L6 7.891l1.833-1.833 4.155 4.102L16.094 6l1.849 1.849-4.1 4.141L18 16.094l-1.849 1.849z"
          />
        </Svg>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 60,
    position: 'absolute',
    flexDirection: 'row',
  },
  closeImage: {
    width: 20,
    height: 20,
  },
  closeImageWrapper: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FFE4B5',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    left: -10,
  },
});
