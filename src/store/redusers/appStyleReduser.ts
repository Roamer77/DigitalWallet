import {createAction, createReducer} from '@reduxjs/toolkit';

export interface ICardStyle {
  cardId: number;
  cardColorName: string;
}
export interface IAppStyleState {
  cardStyles: ICardStyle[];
}

const initialState: IAppStyleState = {
  cardStyles: [
    {cardId: 0, cardColorName: 'PalePurple'},
    {cardId: 1, cardColorName: 'ShadesOfPeach'},
    {cardId: 2, cardColorName: 'TealGradient'},
  ],
};
export const addCardStyle = createAction<ICardStyle>(
  'appStyleReducer/addCardStyle',
);
export const appStyleReducer = createReducer(initialState, builder => {
  builder.addCase(addCardStyle, (state, action) => {
    state.cardStyles.push(action.payload);
  });
});
