import React, {FC, useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import {AppAnimatedActionHeader} from '../components/AppHeader/AppAnimatedActionHeader';
import {AppHeaderWithActionButton} from '../components/AppHeader/AppHeaderWithActionButton';
import {AppCardCreationModal} from '../components/AppModals/CardCreationModal/AppCardCreationModal';
import {CardList} from '../components/CardList/CardList';
import {StickyView} from '../components/CardList/StickyView';
import {TargetPrompt} from '../components/TargetPrompt/TargetPrompt';
import {WavyBackground} from '../components/WavyBackground/WavyBackground';
import {COLORS} from '../resources/colors';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {setIsAddCardModalVisible, setIsCardModalVisible} from '../store/redusers/appStateReducer';
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
  const openModal = () => {
    dispatch(setIsAddCardModalVisible(true));
  };
  return (
    <View style={styles.container}>
      <WavyBackground
        height={270}
        backgroundColor={COLORS.transactionItem}
        secondColor={COLORS.transactionBackground}
        style={{top: 0}}
      />
      <AppAnimatedActionHeader
        onPress={openModal}
       // style={{zIndex: isShown === true ? 10 : 1}}
      />
      <CardList data={cards} onDelete={handleDelete} style={{marginTop: 15}} />
      <AppCardCreationModal />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.transactionBackground,
  },
  cardList: {
    paddingHorizontal: 20,
  },
});
