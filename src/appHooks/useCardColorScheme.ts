import {CARD_COLORS, IColorScheme} from '../resources/colors';
import {useAppSelector} from '../store/hooks';

export const useCardColorScheme = (
  cardId: number,
): IColorScheme | undefined => {
  const {cardStyles} = useAppSelector(store => store.appStyle);
  const colorName = cardStyles.find(
    item => item.cardId === cardId,
  )?.cardColorName;
  if (colorName) {
    return CARD_COLORS[colorName];
  }
  return undefined;
};
