import {useNavigation} from '@react-navigation/native';
import React, {FC, useCallback, useEffect, useRef} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {AppHeader} from '../components/AppHeader/AppHeader';
import {AppModal} from '../components/AppModals/AppModal/AppModal';
import {
  BottomSheet,
  BottomSheetRefProps,
} from '../components/BottomSheet/BottomSheet';
import {CardCarousel} from '../components/CardCarusel/CardCarousel';
import {TransactionsList} from '../components/TransactionsList/TransactionsList';
import {WavyBackground} from '../components/WavyBackground/WavyBackground';
import {COLORS} from '../resources/colors';
import {FadeInView} from './AnimatedScreenView/FadeInView';
interface IDashboard {}

export const Dashboard: FC<IDashboard> = ({}) => {
  const ref = useRef<BottomSheetRefProps>(null);
  const openBottomSheet = useCallback(() => {
    const isActive = ref.current?.isActive();
    ref.current?.scrollTo(isActive ? 0 : -250);
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <WavyBackground
        height={370}
        backgroundColor={COLORS.transactionItem}
        secondColor={COLORS.transactionBackground}
      />
      <Animated.View
        style={[
          {
            ...styles.container,
          },
        ]}>
        <AppHeader
          text={'Dashboard'}
          size={30}
          color={'#fff'}
          style={styles.header}
        />
        <CardCarousel />
        <TransactionsList onPress={openBottomSheet} />
        <AppModal />
      </Animated.View>
      <BottomSheet ref={ref}>
        <View style={{backgroundColor: 'orange', flex: 1}} />
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 10,
  },
  header: {
    paddingTop: 10,
    paddingStart: 10,
    paddingBottom: 20,
  },
});
