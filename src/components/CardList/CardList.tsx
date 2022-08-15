import React, {FC, useEffect, useRef, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import { useAppDispatch } from '../../store/hooks';
import { setIsSettingsHeaderOpened } from '../../store/redusers/appStateReducer';
import {ICard} from '../../store/redusers/cardReducer';
import {CardListItem} from './CardListItem';

interface ICardList {
  style?: any;
  data: ICard[];
  onDelete: (id: number) => void;
}

export const CardList: FC<ICardList> = ({style, data, onDelete}) => {
  const initialMode = useRef<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState<null | number>(null);
  const [itemState, setItemState] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    initialMode.current = false;
  }, []);

  const onItemPress = (index: number) => {
    if (index === currentIndex) {
      setCurrentIndex(null);
      setItemState(0);
    } else {
      setCurrentIndex(index);
      setItemState(1);
    }
  };
  const getState = (index: number) => {
    if (itemState === 0 && currentIndex === index) {
      return 0;
    }
    if (itemState === 1 && currentIndex !== index) {
      return 1;
    }
    if (itemState === 0 && currentIndex !== index) {
      return 2;
    }
  };
  return (
    <ScrollView style={[{...styles.container, ...style}]}>
      {data.map((item, index) => (
        <CardListItem
          initialMode={initialMode}
          key={item.id}
          data={item}
          onDelete={() => onDelete(item.id)}
          currentIndex={currentIndex}
          setCurrentIndex={onItemPress}
          index={index}
          state = {getState(index)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
