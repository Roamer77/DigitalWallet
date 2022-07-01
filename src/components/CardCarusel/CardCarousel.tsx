import {useNavigation} from '@react-navigation/native';
import React, {FC, useCallback} from 'react';
import {Dimensions, StyleSheet, View, ViewabilityConfig} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {CARD_COLORS} from '../../resources/colors';
import {ScreenNames} from '../../screens/ScreenNames';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {ICard, setCurrentCard} from '../../store/redusers/cardReducer';
import {SharedElement} from 'react-navigation-shared-element';

import {Card} from '../Card/Card';

interface ICardCarousel {}

const viewabilityConfig: ViewabilityConfig = {
  waitForInteraction: true,
  itemVisiblePercentThreshold: 60,
};

export const CardCarousel: FC<ICardCarousel> = ({}) => {
  const {cards, currentCard} = useAppSelector(store => store.cards);
  const {cardStyles} = useAppSelector(store => store.appStyle);
  const dispatch = useAppDispatch();

  const onViewableItemsChangedCallback = useCallback(
    ({viewableItems, changed}) => {
      if (changed[0].isViewable === true) {
        dispatch(setCurrentCard(changed[0].item));
      }
    },
    [],
  );
  const getCardBgColor = (id: number) => {
    return CARD_COLORS[
      cardStyles.find(item => item.cardId === id)?.cardColorName
    ].secondary;
  };
  const navigation = useNavigation();
  const scrollX = useSharedValue(0);
  const windowWidth = Dimensions.get('window').width;
  const scrollHandle = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = Math.round(event.contentOffset.x / windowWidth);
    },
  });
  const handleCardPress = (item: ICard) => {
    navigation.navigate(ScreenNames.Statistics, {item});
  };
  return (
    <View style={styles.container}>
      <Animated.FlatList
        onScroll={scrollHandle}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        data={cards}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChangedCallback}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handleCardPress(item)}>
            <SharedElement id={`item.${item.id}.card`}>
              <Card
                id={item.id}
                name={item.name}
                balance={item.balance}
                icon={item.cardIcon}
                cardNumber={item.cardNumber}
                currencyType={item.currencyType}
                style={{
                  ...styles.carouselItem,
                  backgroundColor: getCardBgColor(item.id),
                }}
              />
            </SharedElement>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
  },
  carouselItem: {
    marginHorizontal: 10,
  },
});
