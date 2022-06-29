import React, {FC, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Animated, {
  Extrapolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {CARD_COLORS, COLORS, IColorScheme} from '../../../resources/colors';
import {useAppSelector} from '../../../store/hooks';
import {ICard, ITransactionData} from '../../../store/redusers/cardReducer';

interface ITransaction {
  data: ITransactionData;
  cardData: ICard;
  renderIndex: number;
}

export const Transaction: FC<ITransaction> = ({
  data,
  cardData,
  renderIndex,
}) => {
  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: withDelay(100 + renderIndex * 100, withTiming(opacity.value)),
  }));

  useEffect(() => {
    opacity.value = 1;
  }, [opacity]);

  return (
    <Animated.View
      style={[
        {
          ...styles.container,
          //backgroundColor: `hsl(290, 45%, ${73 + renderIndex * 2}%)`,
        },
        animatedStyle,
      ]}>
      <View style={styles.content}>
        <Text style={styles.text}> {data.recipient}</Text>
        <Text style={styles.amount}>
          {' '}
          {data.amount} {cardData.currencyType}{' '}
        </Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    marginVertical: 7,
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: COLORS.transactionItem,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    paddingStart: 30,
    color: COLORS.transactionItemText,
  },
  amount: {
    fontSize: 20,
    fontWeight: '600',
    paddingEnd: 10,
    color: COLORS.transactionItemText,
  },
});
