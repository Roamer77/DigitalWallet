import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {FC, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Button,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Animated, {
  Layout,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
  ZoomInEasyDown,
} from 'react-native-reanimated';
import {SharedElement} from 'react-navigation-shared-element';
import {AppIconButton} from '../components/AppIconButton/AppIconButton';
import {Card} from '../components/Card/Card';
import {WavyBackground} from '../components/WavyBackground/WavyBackground';
import {CARD_COLORS, COLORS} from '../resources/colors';
import {useAppSelector} from '../store/hooks';

interface IStatistics {}

const AnimatedSaveAreaView = Animated.createAnimatedComponent(SafeAreaView);
const {height} = Dimensions.get('window');

export const Statistics: FC<IStatistics> = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();
  const opacity = useSharedValue(0);

  //make hook from this
  const {cardStyles} = useAppSelector(store => store.appStyle);

  const getCardBgColor = (id: number) => {
    return CARD_COLORS[
      cardStyles.find(item => item.cardId === id)?.cardColorName
    ].secondary;
  };

  useEffect(() => {
    opacity.value = 1;
    return () => {
      opacity.value = 0;
    };
  }, []);

  // useFocusEffect(()=>{
  //   opacity.value = 1;
  // });
  const animatedContainerStyle = useAnimatedStyle(() => ({
    opacity: withTiming(opacity.value, {duration: 250}),
  }));

  return (
    <AnimatedSaveAreaView style={[styles.container, animatedContainerStyle]}>
      <WavyBackground
        height={370}
        backgroundColor={COLORS.transactionItem}
        secondColor={COLORS.transactionBackground}
      />
      <View style={styles.headerStyle}>
        <AppIconButton
          onPress={() => navigation.goBack()}
          icon={require('../assets/StatisticsScreen/back.png')}
          width={25}
          height={25}
        />
        <Text style={styles.headerTitle}>Statistics</Text>
      </View>

      <SharedElement id={`item.${item.id}.card`} style={{paddingTop: 20}}>
        <Card
          id={item.id}
          name={item.name}
          balance={item.balance}
          icon={item.cardIcon}
          cardNumber={item.cardNumber}
          currencyType={item.currencyType}
          style={{
            ...styles.cardStyle,
            backgroundColor: getCardBgColor(item.id),
          }}
        />
      </SharedElement>
      <Animated.View style={[styles.chartArea]} /> 
    </AnimatedSaveAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  chartArea: {
    width: '100%',
    height: '100%',
    backgroundColor: '#dccef2',
  },
  cardStyle: {
    backgroundColor: '#92DEA0',
    width: '100%',
    height: 300,
    borderRadius: 0,
  },
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 32,
    color: COLORS.primaryTextColor,
    alignSelf: 'center',
    paddingStart: 20,
  },
});
