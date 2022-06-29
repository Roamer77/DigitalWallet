import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Button,
} from 'react-native';
import Animated, {
  Layout,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  ZoomInEasyDown,
} from 'react-native-reanimated';
import {Card} from '../components/Card/Card';
import { WavyBackground } from '../components/WavyBackground/WavyBackground';
import { COLORS } from '../resources/colors';

interface IStatistics {}

const AnimatedSaveAreaView = Animated.createAnimatedComponent(SafeAreaView);
const {height} = Dimensions.get('window');
export const Statistics: FC<IStatistics> = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();
  const scale = useSharedValue(0.9);
  const charTranslation = useSharedValue(0);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', e => {
      scale.value = withTiming(1);
      charTranslation.value = withTiming(0);
    });
    const unsubscribe1 = navigation.addListener('blur', e => {
      scale.value = withTiming(0.9);
      charTranslation.value = withTiming(40);
    });

    return () => {
      unsubscribe;
      unsubscribe1;
    };
  }, [navigation]);

  const animatedWrapperStyle = useAnimatedStyle(() => ({}));
  const animatedCardStyle = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
  }));
  const animatedChardStyle = useAnimatedStyle(() => ({
    transform: [{translateY: charTranslation.value}],
  }));
  return (
    <AnimatedSaveAreaView style={[styles.container]} entering={ZoomInEasyDown} >
      <WavyBackground
        height={370}
        backgroundColor={COLORS.transactionItem}
        secondColor={COLORS.transactionBackground}
      />
      <Button title="go back" onPress={() => navigation.goBack()} />
      <Animated.View style={[animatedCardStyle]}>
        <Card
          name={item.name}
          balance={item.balance}
          icon={item.cardIcon}
          cardNumber={item.cardNumber}
          currencyType={item.currencyType}
          style={{
            backgroundColor: '#92DEA0',
            width: '100%',
            borderRadius: 0,
          }}
        />
      </Animated.View>
      <Animated.View style={[styles.chartArea, animatedChardStyle]} />
    </AnimatedSaveAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  chartArea: {
    width: '100%',
    height: '50%',
    backgroundColor: 'red',
  },
});
