import React, {FC} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {GestureDetector} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {COLORS} from '../../resources/colors';

interface IBottomSheet {}

const SCREEN_HEIGHT = Dimensions.get('window').height;
export const BottomSheet: FC<IBottomSheet> = ({}) => {
  return (
    <GestureDetector>
      <Animated.View style={styles.wrapper}>
        <View style={styles.line}/>
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: SCREEN_HEIGHT,
    backgroundColor: COLORS.bottomSheetBackgroundColor,
    position: 'absolute',
    top: SCREEN_HEIGHT / 1.5,
    borderRadius: 25,
  },
  line: {
    width: 25,
    height: 4,
    backgroundColor: COLORS.bottomSheetLineColor,
    alignSelf: 'center',
  },
});
