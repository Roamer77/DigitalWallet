import React, {FC} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../../resources/colors';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {setIsCardModalVisible} from '../../../store/redusers/appStateReducer';
import {AppIconButton} from '../../AppIconButton/AppIconButton';
import {TransferComment} from './TransferComment';
import {TransferMoneyInput} from './TransferMoneyInput';

interface IAppModal {
  visible?: boolean;
}

export const AppModal: FC<IAppModal> = ({}) => {
  const dispatch = useAppDispatch();
  const {isCardModalVisible} = useAppSelector(state => state.appState);
  const {currentCard} = useAppSelector(state => state.cards);
  const handleCloseBtnPress = () => {
    dispatch(setIsCardModalVisible(false));
  };
  return (
    <Modal animationType="fade" visible={isCardModalVisible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.content}>
          <AppIconButton
            icon={require('../../../assets/AppModal/closeBtnWithoutCircle.png')}
            onPress={handleCloseBtnPress}
            width={20}
            height={20}
            styles={styles.closeButton}
          />
          <Text style={styles.cardName}> {currentCard.name} </Text>
          <TransferMoneyInput
            style={styles.transferMoneyInput}
            currencyType={currentCard.currencyType}
          />
          <TransferComment style={styles.transferComment} />
          <View style={styles.actionButtons}>
            <Button title="Income" onPress={handleCloseBtnPress} />
            <Button title="Transfer" onPress={handleCloseBtnPress} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.modalBackgroundColor,
    flex: 1,
  },
  content: {
    width: 250,
    height: 270,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    position: 'absolute',
    top: 200,
    left: 70,
  },

  actionButtons: {
    paddingTop: 20,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  closeButton: {
    alignSelf: 'flex-end',
    paddingTop: 10,
    paddingEnd: 10,
  },
  transferMoneyInput: {
    paddingTop: 20,
  },
  transferComment: {
    paddingTop: 20,
  },
  cardName: {
    fontSize: 20,
  },
});
