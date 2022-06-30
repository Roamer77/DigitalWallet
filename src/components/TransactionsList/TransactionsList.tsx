import React, {FC} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {COLORS} from '../../resources/colors';
import {useAppSelector} from '../../store/hooks';
import {AppHeader} from '../AppHeader/AppHeader';
import {Transaction} from './Transaction/Transaction';

interface ITransactionsList {}

export const TransactionsList: FC<ITransactionsList> = ({}) => {
  const {currentCard, transactions} = useAppSelector(store => store.cards);
  const currentTransactions = transactions.filter(
    item => item.cardId === currentCard.id,
  );
  return (
    <View style={styles.container}>
      <AppHeader
        text="You charges:"
        size={20}
        color={COLORS.transactionItemText}
        style={styles.header}
      />
      <Animated.FlatList
        style={{marginBottom: 10}}
        data={currentTransactions}
        showsVerticalScrollIndicator = {false}
        renderItem={({item, index}) => (
          <Transaction data={item} cardData={currentCard} renderIndex={index} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 25,
    flex: 1,
    //backgroundColor: COLORS.transactionBackground,
  },
  header: {
    paddingBottom: 10,
  },
});
