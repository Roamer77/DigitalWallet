import {combineReducers} from '@reduxjs/toolkit';
import {appStateReducer} from './appStateReducer';
import {appStyleReducer} from './appStyleReduser';
import {cardReducer} from './cardReducer';

export const rootReducer = combineReducers({
  cards: cardReducer,
  appState: appStateReducer,
  appStyle: appStyleReducer,
});
