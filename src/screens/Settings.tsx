import React, {FC, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import {AppCardCreationModal} from '../components/AppModals/CardCreationModal/AppCardCreationModal';
import {CardList} from '../components/CardList/CardList';
import {StickyView} from '../components/CardList/StickyView';
import {WavyBackground} from '../components/WavyBackground/WavyBackground';
import {COLORS} from '../resources/colors';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {deleteCard} from '../store/redusers/cardReducer';
import {CircularProgress} from './Circle';

interface ISettings {}

export const Settings: FC<ISettings> = ({}) => {
  const {cards} = useAppSelector(store => store.cards);
  const dispatch = useAppDispatch();

  const handleDelete = useCallback(
    (id: number) => {
      dispatch(deleteCard(id));
    },
    [dispatch],
  );
  const w = useSharedValue(40);
  const o = useSharedValue(1);
  return (
    <View style={styles.container}>
      <WavyBackground
        height={270}
        backgroundColor={COLORS.transactionItem}
        secondColor={COLORS.transactionBackground}
        style={{top: 0}}
      />
      <CardList data={cards} onDelete={handleDelete} />
      <AppCardCreationModal />
      {/* <StickyView animWidth={w} animOpacity={o} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: COLORS.settingsBackground,
    backgroundColor: COLORS.transactionBackground,
  },
  cardList: {
    paddingHorizontal: 20,
  },
});
