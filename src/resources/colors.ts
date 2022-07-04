export const COLORS = {
  inputBorderColor: '#e1e6e8',
  modalBackgroundColor: 'rgba(0, 0, 0, 0.2)',
  transactionItem: '#7858A6',
  transactionBackground: '#4C3575',
  bottomTabBar: '#7858A6',
  bottomTabBarIconNames: '#f2edfa',
  settingsBackground: '#E8D8ED',
  transactionItemText: '#dccef2',
  promptMainCircleColor: 'rgba(120, 88, 166, 0.8)',
  promptSecondaryCircleColor: 'rgba(232, 216, 237, 0.8)',
  primaryTextColor:'#fff'
};
export interface IColorScheme {
  primary: string;
  primary_light: string;
  secondary: string;
  secondary_light: string;
  tertiary: string;
  tertiary_light: string;
}
const TealGradient: IColorScheme = {
  primary: '#017C80',
  primary_light: '#1E9086',
  secondary: '#3BA38D',
  secondary_light: '#58B793',
  tertiary: '#75CA9A',
  tertiary_light: '#92DEA0',
};

const ShadesOfPeach: IColorScheme = {
  primary: '#FFC5A3',
  primary_light: '#FFDBB8',
  secondary: '#FFE4B5',
  secondary_light: '#FFE4B5',
  tertiary: '#FFC999',
  tertiary_light: '#FFC999',
};
const PalePurple: IColorScheme = {
  primary: '#CE9AD9',
  primary_light: '#D7AFE0',
  secondary: '#E0C4E7',
  secondary_light: '#E8D8ED',
  tertiary: '#F1EDF4',
  tertiary_light: '#F1EDF4',
};
export const CARD_COLORS = {
  TealGradient: TealGradient,
  ShadesOfPeach: ShadesOfPeach,
  PalePurple: PalePurple,
};
