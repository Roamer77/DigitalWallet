import React, {FC, useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Gesture, GestureDetector, GestureHandlerRootView} from 'react-native-gesture-handler';
import Animated, {
  Layout,
  SlideInLeft,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {CARD_COLORS, IColorScheme} from '../../resources/colors';
import {useAppSelector} from '../../store/hooks';
import {ICard} from '../../store/redusers/cardReducer';
import {AppIcon} from '../AppIcon/AppIcon';
import {CardBalance} from '../Card/CardBalance';
import {CardNumber} from '../Card/CardNumber';
import {AditionalCardInfo} from './AditionalCardInfo';
import {CardSettingFunctions} from './CardSettingFunctions';
import {StickyView} from './StickyView';

interface ICardListItem {
  initialMode: React.MutableRefObject<boolean>;
  data: ICard;
  onDelete: () => void;
  currentIndex: number | null;
  index: number;
  setCurrentIndex: (index: number) => void;
  state: number;
}
const windowWidth = Dimensions.get('window').width;
const THRESHHOLD_SWIPE_TRANSLATION_X = windowWidth * 0.3;

export const CardListItem: FC<ICardListItem> = ({
  data,
  onDelete,
  initialMode,
  currentIndex,
  index,
  setCurrentIndex,
  state,
}) => {
  const {cardStyles} = useAppSelector(store => store.appStyle);
  const cardColorName = cardStyles.find(item => item.cardId === data.id);
  const cardColorScheme: IColorScheme =
    CARD_COLORS[cardColorName?.cardColorName];

  const swipeRight = useSharedValue(0);
  const itemTranslateY = useSharedValue(0);
  const stickyViewWidth = useSharedValue(0);
  const itemHeight = useSharedValue(60);
  const itemMarginTop = useSharedValue(10);
  const stickyValueOpacity = useSharedValue(0);
  const detailesFunctionsHeight = useSharedValue(0);
  const cardInfoOpacity = useSharedValue(0);
  const cardInfoScale = useSharedValue(0);
  const settingsCardTranslatY = useSharedValue(0);
  const settingsCardOpacity = useSharedValue(0);

  const gestureHandler = Gesture.Pan()
    .onStart(() => {
      if (currentIndex === null) {
        stickyValueOpacity.value = 1;
      }
    })
    .onUpdate(event => {
      if (currentIndex === null) {
        if (event.translationX < 130) {
          swipeRight.value = event.translationX;
          stickyViewWidth.value = event.translationX;
        }
        if (event.translationX < 0) {
          swipeRight.value = 0;
          stickyViewWidth.value = 0;
        }
      }
    })
    .onEnd(() => {
      const shouldBeDelete = swipeRight.value > THRESHHOLD_SWIPE_TRANSLATION_X;
      if (shouldBeDelete) {
        itemHeight.value = 0;
        itemMarginTop.value = 0;
        //swipeRight.value = withTiming(windowWidth, {}, () => onDelete());
        swipeRight.value = withTiming(windowWidth);
        stickyViewWidth.value = 0;
        stickyValueOpacity.value = 0;
      } else {
        swipeRight.value = withTiming(
          0,
          {},
          () => (stickyValueOpacity.value = 0),
        );
        stickyViewWidth.value = 0;
      }
    });

  const tap = () => {
    setCurrentIndex(index);
    if (currentIndex === null) {
      detailesFunctionsHeight.value = 300;
      itemHeight.value = 160;
      cardInfoOpacity.value = 1;
      cardInfoScale.value = 1;
    } else {
      detailesFunctionsHeight.value = 0;
      itemHeight.value = 60;
      cardInfoOpacity.value = 0;
      cardInfoScale.value = 0;
    }
  };

  const itemStyle = useAnimatedStyle(() => ({
    transform: [
      {translateY: withTiming(itemTranslateY.value, {duration: 450})},
    ],
    marginTop: withTiming(itemMarginTop.value, {duration: 450}),
    height: withTiming(itemHeight.value, {duration: 450}),
  }));

  const slideRightStyle = useAnimatedStyle(() => ({
    transform: [{translateX: swipeRight.value}],
  }));

  useEffect(() => {
    if (currentIndex === null) {
      itemTranslateY.value = 0;
      settingsCardTranslatY.value = 80;
      settingsCardOpacity.value = 0;
    } else {
      itemTranslateY.value = -70 * index;
      settingsCardTranslatY.value = -70 * index;
      settingsCardOpacity.value = 1;
    }
  }, [currentIndex, index, itemTranslateY, swipeRight]);

  useEffect(() => {
    if (state === 1) {
      swipeRight.value = withTiming(windowWidth);
    }
    if (state === 2) {
      swipeRight.value = withTiming(0);
    }
  }, [state]);

  const composed = Gesture.Race(gestureHandler);

  return (
    <Animated.View style={[styles.container]}>
      <Animated.View style={[slideRightStyle]}>
        <GestureDetector gesture={composed}>
          <TouchableOpacity onPress={tap} activeOpacity={0.9}>
            <Animated.View
              style={[
                {...styles.content, backgroundColor: cardColorScheme.primary},
                itemStyle,
              ]}
              entering={
                initialMode.current
                  ? SlideInLeft.delay(100 * data.id)
                  : SlideInLeft
              }>
              <View style={[styles.name]}>
                <Text style={styles.nameText}>{data.name}</Text>
              </View>
              <AditionalCardInfo
                data={data}
                cardInfoOpacity={cardInfoOpacity}
                cardInfoScale={cardInfoScale}
              />
            </Animated.View>
          </TouchableOpacity>
        </GestureDetector>
        <CardSettingFunctions
          animHeight={detailesFunctionsHeight}
          translateY={settingsCardTranslatY}
          opacity={settingsCardOpacity}
        />
      </Animated.View>

      <StickyView
        animWidth={stickyViewWidth}
        animOpacity={stickyValueOpacity}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  content: {
    width: '100%',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
    height: 50,
  },
  name: {
    paddingTop: 20,
    paddingStart: 10,
    alignSelf: 'flex-start',
  },
  nameText: {
    fontSize: 21,
  },
  icon: {
    flex: 1,
    alignItems: 'flex-end',
    paddingEnd: 10,
  },
  detailesFunctions: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDBB8',
    borderRadius: 10,
    marginTop: 10,
  },
  cardInfoWrapper: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  cardInfoFooter: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  cardInfoCenter: {
    flex: 1,
    paddingTop: 10,
    width: '100%',
  },
});
