import React, {FC} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import Svg, {Ellipse} from 'react-native-svg';

interface IWavyBackground {
  height: number;
  backgroundColor: string;
  secondColor: string;
  style?: any;
}

export const WavyBackground: FC<IWavyBackground> = ({
  height,
  backgroundColor,
  secondColor,
  style,
}) => {
  const {width} = Dimensions.get('window');
  const headerHeight = height;
  const AnimatedEllipse = Animated.createAnimatedComponent(Ellipse);

  return (
    <Svg
      style={[{...styles.container, backgroundColor: secondColor, ...style}]}
      width={'100%'}
      height="200%">
      <AnimatedEllipse
        cx={width / 3}
        cy={`-${898 - headerHeight + 2}`}
        rx="600"
        ry="898.5"
        fill={backgroundColor}
        strokeWidth="2"
      />
    </Svg>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
});
