import React, {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {ICard} from '../../store/redusers/cardReducer';
import {AppIcon} from '../AppIcon/AppIcon';
import {CardBalance} from '../Card/CardBalance';
import {CardNumber} from '../Card/CardNumber';

interface IAditionalCardInfo {
  data: ICard;
  cardInfoScale: Animated.SharedValue<number>;
  cardInfoOpacity: Animated.SharedValue<number>;
}

export const AditionalCardInfo: FC<IAditionalCardInfo> = ({
  data,
  cardInfoOpacity,
  cardInfoScale,
}) => {
  const cardInfoAnimStyle = useAnimatedStyle(() => ({
    opacity: withTiming(cardInfoOpacity.value),
    transform: [{scale: withTiming(cardInfoScale.value)}],
  }));
  return (
    <Animated.View style={[styles.cardInfoWrapper, cardInfoAnimStyle]}>
      <View style={styles.cardInfoCenter}>
        <CardNumber cardNumber={data.cardNumber} />
      </View>
      <View style={styles.cardInfoFooter}>
        <CardBalance currencyType={data.currencyType} balance={data.balance} />
        <AppIcon width={70} height={50} icon={data.cardIcon} />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {},
  cardInfoWrapper: {
    alignSelf: 'flex-start',
  },
  cardInfoFooter: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  cardInfoCenter: {
    paddingTop: 10,
    width: '100%',
  },
});
