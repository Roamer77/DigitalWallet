import React, {FC, useEffect, useState} from 'react';
import {Button, Modal, StyleSheet, View} from 'react-native';
import {
  AppDropdownColorPicker,
  IColorPickerPayload,
} from '../components/AppDropdownSelector/AppDropdownColorPicker';
import {AppDropdownSelectorWithTitle} from '../components/AppDropdownSelector/AppDropdownSelectorWithTitle';
import {AppTextInput} from '../components/AppModals/CardCreationModal/AppTextInput';
import {CardNumberInput} from '../components/AppModals/CardCreationModal/CardNumberInput';
import {ModalTitle} from '../components/AppModals/CardCreationModal/ModalTitle';
import {CurrencyTypes} from '../components/Card/CurrencyTypes';
import {CardTypes} from '../resources/CardTypes';
import {CARD_COLORS, COLORS} from '../resources/colors';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {addCardStyle} from '../store/redusers/appStyleReduser';
import {addNewCard} from '../store/redusers/cardReducer';
import {CardIcons} from '../utiles/CardIcons';

const Cards = [
  {data: 'Visa', payload: CardIcons.VISA, type: CardTypes.VISA},
  {
    data: 'MasterCard',
    payload: CardIcons.MASTER_CARD,
    type: CardTypes.MASTER_CARD,
  },
  {data: 'PayPal', payload: CardIcons.PAY_PAL, type: CardTypes.PAY_PAL},
  {data: 'Unionpay', payload: CardIcons.UNION_PAY, type: CardTypes.UNION_PAY},
];

const ColorsKeys = Object.keys(CARD_COLORS);
const Colors: IColorPickerPayload[] = [
  {
    data: CARD_COLORS.PalePurple.primary,
    cardColorName: ColorsKeys[2],
  },
  {
    data: CARD_COLORS.ShadesOfPeach.primary,
    cardColorName: ColorsKeys[1],
  },
  {
    data: CARD_COLORS.TealGradient.primary,
    cardColorName: ColorsKeys[0],
  },
];

export const AddNewCardScreen = () => {
  const {cards} = useAppSelector(store => store.cards);
  const dispatch = useAppDispatch();
  const [cardBalance, setCardBalance] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumbers, setCardNumbers] = useState<number[]>([]);

  const [cardType, setCardType] = useState(Cards[0]);
  const [cardColor, setCardColor] = useState(Colors[0]);

  const closeModal = () => {
    clearFieldData();
  };
  const createCard = () => {
    const newCard = {
      id: getNewId(),
      name: cardName,
      cardNumber: cardNumbers,
      balance: parseInt(cardBalance, 10),
      currencyType: CurrencyTypes.EUR,
      cardIcon: cardType.payload,
    };
    dispatch(
      addCardStyle({
        cardId: getNewId(),
        cardColorName: cardColor.cardColorName,
      }),
    );
    dispatch(addNewCard(newCard));
    closeModal();
  };
  const getNewId = () => {
    if (cards.length > 0) {
      let maxId = Math.max(...cards.map(item => item.id));
      return maxId + 1;
    }
    return 0;
  };

  const clearFieldData = () => {
    setCardName('');
    setCardBalance('');
    setCardNumbers([]);
    setCardType(Cards[0]);
    setCardColor(Colors[0]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ModalTitle title="New card" style={styles.title} />
        <AppTextInput
          title="Enter card name:"
          placeholder="Card name..."
          text={cardName}
          onTextChange={setCardName}
        />
        <CardNumberInput
          style={styles.cardNumberInput}
          numbers={cardNumbers}
          onTextChange={setCardNumbers}
        />
        <AppTextInput
          title="Enter money amount:"
          placeholder="1000$"
          style={styles.amountMoneyOnNewCard}
          text={cardBalance}
          onTextChange={setCardBalance}
        />
        <AppDropdownSelectorWithTitle
          title="Select card type:"
          style={styles.cardTypeSelector}
          data={Cards}
          selectedItem={cardType}
          onItemSelected={setCardType}
        />
        <AppDropdownColorPicker
          title="Select card color:"
          style={styles.cardColorPicker}
          onItemSelected={setCardColor}
          colors={Colors}
        />
        <View style={styles.buttons}>
          <Button title="Create" onPress={createCard} />
          <Button title="Cancel" onPress={closeModal} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.modalBackgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    height: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    paddingStart: 20,
    paddingEnd: 20,
  },
  title: {
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  amountMoneyOnNewCard: {
    paddingTop: 10,
  },
  cardNumberInput: {
    paddingTop: 10,
  },
  cardTypeSelector: {
    paddingTop: 10,
  },
  cardColorPicker: {
    paddingTop: 10,
  },
});
