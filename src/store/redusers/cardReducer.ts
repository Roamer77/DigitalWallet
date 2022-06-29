import {createAction, createReducer} from '@reduxjs/toolkit';
import {CurrencyTypes} from '../../components/Card/CurrencyTypes';
import {CardIcons} from '../../utiles/CardIcons';

export interface ICard {
  id: number;
  name: string;
  cardNumber: number[];
  balance: number;
  currencyType: CurrencyTypes;
  cardIcon: CardIcons;
}
export interface ITransactionData {
  id: number;
  cardId: number;
  amount: number;
  recipient: string;
}
interface IinitialState {
  currentCard: ICard;
  cards: ICard[];
  transactions: ITransactionData[];
}
const initialState: IinitialState = {
  currentCard: {
    id: 0,
    name: 'First card',
    cardNumber: [4325, 4743, 6743, 1102],
    balance: 104200,
    currencyType: CurrencyTypes.USD,
    cardIcon: CardIcons.MASTER_CARD,
  },
  cards: [
    {
      id: 0,
      name: 'First card',
      cardNumber: [4325, 4743, 6743, 1102],
      balance: 104200,
      currencyType: CurrencyTypes.USD,
      cardIcon: CardIcons.MASTER_CARD,
    },
    {
      id: 1,
      name: 'Second card',
      cardNumber: [6321, 2783, 4300, 1102],
      balance: 200,
      currencyType: CurrencyTypes.EUR,
      cardIcon: CardIcons.VISA,
    },
    {
      id: 2,
      name: 'Third card',
      cardNumber: [1721, 8750, 9301, 1102],
      balance: 8600,
      currencyType: CurrencyTypes.EUR,
      cardIcon: CardIcons.PAY_PAL,
    },
  ],
  transactions: [
    {
      id: 0,
      cardId: 0,
      amount: 100,
      recipient: 'Some one',
    },
    {
      id: 1,
      cardId: 0,
      amount: 220,
      recipient: 'Some one',
    },
    {
      id: 2,
      cardId: 1,
      amount: 500,
      recipient: 'Some one1',
    },
    {
      id: 3,
      cardId: 1,
      amount: 270,
      recipient: 'Some one2',
    },
    {
      id: 4,
      cardId: 1,
      amount: 910,
      recipient: 'Some one2',
    },
    {
      id: 5,
      cardId: 2,
      amount: 10,
      recipient: 'Some one2',
    },
    {
      id: 6,
      cardId: 2,
      amount: 20,
      recipient: 'Some one2',
    },

    {
      id: 7,
      cardId: 0,
      amount: 20,
      recipient: 'Some one2',
    },

    {
      id: 8,
      cardId: 0,
      amount: 20,
      recipient: 'Some one2',
    },
    {
      id: 9,
      cardId: 0,
      amount: 20,
      recipient: 'Some one2',
    },
    {
      id: 10,
      cardId: 0,
      amount: 20,
      recipient: 'Some one2',
    },
  ],
};
export const addNewCard = createAction<ICard>('card/addNewCard');
export const deleteCard = createAction<number>('card/deleteCard');
export const setCurrentCard = createAction<ICard>('card/setCurrentCard');
export const cardReducer = createReducer(initialState, builder => {
  builder
    .addCase(addNewCard, (state, action) => {
      state.cards.push(action.payload);
    })
    .addCase(setCurrentCard, (state, action) => {
      state.currentCard = action.payload;
    })
    .addCase(deleteCard, (state, action) => {
      state.cards = state.cards.filter(item => item.id !== action.payload);
    });
});
