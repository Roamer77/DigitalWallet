import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {AppHeader} from '../components/AppHeader/AppHeader';
import {AppModal} from '../components/AppModals/AppModal/AppModal';
import {CardCarousel} from '../components/CardCarusel/CardCarousel';
import {TransactionsList} from '../components/TransactionsList/TransactionsList';
import {WavyBackground} from '../components/WavyBackground/WavyBackground';
import {COLORS} from '../resources/colors';
import {FadeInView} from './AnimatedScreenView/FadeInView';
interface IDashboard {}

export const Dashboard: FC<IDashboard> = ({}) => {

  return (
    <SafeAreaView style={{flex: 1}} >
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
        <TransactionsList />
        <AppModal />
      </Animated.View>
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
