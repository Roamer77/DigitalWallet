import {createAction, createReducer} from '@reduxjs/toolkit';

export interface IAppState {
  isCardModalVisible: boolean;
  isAddCardModalVisible: boolean;
  isSettingsHeaderOpen: boolean;
}
const initialState: IAppState = {
  isCardModalVisible: false,
  isAddCardModalVisible: false,
  isSettingsHeaderOpen: false,
};
export const setIsCardModalVisible = createAction<boolean>(
  'appState/IsCardModalVisible',
);
export const setIsAddCardModalVisible = createAction<boolean>(
  'appState/IsAddCardModalVisible',
);
export const setIsSettingsHeaderOpened = createAction<boolean>(
  'appState/isSettingsHeaderOpen',
);
export const appStateReducer = createReducer(initialState, builder => {
  builder
    .addCase(setIsCardModalVisible, (state, action) => {
      state.isCardModalVisible = action.payload;
    })
    .addCase(setIsAddCardModalVisible, (state, action) => {
      state.isAddCardModalVisible = action.payload;
    })
    .addCase(setIsSettingsHeaderOpened, (state, action) => {
      state.isSettingsHeaderOpen = action.payload;
    });
});
