import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {useAppDispatch} from '../../store/hooks';
import {setIsCardModalVisible} from '../../store/redusers/appStateReducer';
import {ActionButton} from '../ActionButton/ActionButton';
import {AppIcon} from '../AppIcon/AppIcon';
import {CardBalance} from './CardBalance';
import {CardName} from './CardName';
import {CardNumber} from './CardNumber';
import {CurrencyTypes} from './CurrencyTypes';

interface ICard {
  name: string;
  cardNumber: number[];
  icon: any;
  balance: number;
  currencyType: CurrencyTypes;
  id: number;
  style?: any;
}
export const Card: FC<ICard> = ({
  name,
  cardNumber,
  icon,
  balance,
  currencyType,
  style,
  id,
}) => {
  const dispatch = useAppDispatch();
  const handleCardActionBtnPress = () => {
    dispatch(setIsCardModalVisible(true));
  };
  return (
    <View style={{...styles.container, ...style}}>
      <View style={styles.content}>
        <View style={styles.header}>
          <CardName name={name} />
          <ActionButton onPress={handleCardActionBtnPress} />
        </View>
        <View style={styles.center}>
          <CardNumber cardNumber={cardNumber} />
        </View>
        <View style={styles.footer}>
          <CardBalance currencyType={currencyType} balance={balance} />
          <AppIcon width={70} height={50} icon={icon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 370,
    height: 200,
    borderRadius: 10,
    elevation: 10,
    shadowOffset: {
      width: 5,
      height: -5,
    },
    shadowColor: '#111',
    shadowRadius: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    paddingStart: 20,
  },
  footer: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
});
