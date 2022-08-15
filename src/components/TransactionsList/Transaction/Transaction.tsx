import React, {FC, useEffect} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
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
  icon: any;
}

export const Transaction: FC<ITransaction> = ({
  data,
  cardData,
  renderIndex,
  icon,
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
        <View style={styles.iconWrapper}>
          <Image style={styles.icon} source={icon} />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.text}> {data.recipient}</Text>
          <Text style={styles.amount}>
            {data.amount} {cardData.currencyType}
          </Text>
        </View>
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
    backgroundColor: COLORS.transactionItem,
  },
  content: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    color: COLORS.transactionItemText,
  },
  amount: {
    fontSize: 20,
    fontWeight: '600',
    paddingEnd: 10,
    color: COLORS.transactionItemText,
  },
  iconWrapper: {
    paddingStart: 10,
  },
  icon: {
    width: 44,
    height: 44,
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingStart: 20,
    paddingEnd: 60,
  },
});
