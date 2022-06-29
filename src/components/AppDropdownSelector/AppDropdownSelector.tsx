import React, {FC, useEffect} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useToggle} from '../../appHooks/useToggle';
import {COLORS} from '../../resources/colors';

interface IAppDropdownSelector {
  style?: any;
  textInside?: string;
  height?: number;
  data: any[];
  defaultItem: any;
  onItemPress: (data: any) => void;
  RenderItem?: FC;
}
export interface IRenderItem {
  data: any;
}
interface ISelectorRenderItem {
  onPress: () => void;
}
const SelectorRenderItem: FC<ISelectorRenderItem> = ({onPress, children}) => {
  return (
    <TouchableOpacity onPress={onPress} style={renderItemStyles.container}>
      {children}
    </TouchableOpacity>
  );
};

export const AppDropdownSelector: FC<IAppDropdownSelector> = ({
  style,
  textInside,
  data,
  onItemPress,
  RenderItem,
}) => {
  const listHeight = useSharedValue(0);
  const listBorderBottomWidth = useSharedValue(0);
  const touchableOpacityRadius = useSharedValue(7);
  const [toggle, toggleIt] = useToggle(false);

  const handleListItemPress = (payload: any) => {
    onItemPress(payload);
    toggleIt();
  };

  useEffect(() => {
    listHeight.value = toggle ? 90 : 0;
    touchableOpacityRadius.value = toggle ? 0 : 7;
    listBorderBottomWidth.value = toggle ? 1 : 0;
  }, [toggle, listHeight, listBorderBottomWidth, touchableOpacityRadius]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      height: withTiming(listHeight.value),
      borderBottomWidth: listBorderBottomWidth.value,
    };
  });
  const animatedTouchableOpacityStyle = useAnimatedStyle(() => {
    return {
      borderBottomStartRadius: withTiming(touchableOpacityRadius.value),
      borderBottomEndRadius: withTiming(touchableOpacityRadius.value),
    };
  });
  return (
    <View style={style}>
      <TouchableOpacity onPress={toggleIt}>
        <Animated.View
          style={[styles.container, animatedTouchableOpacityStyle]}>
          {textInside && <Text style={styles.selectedText}>{textInside}</Text>}
          <RenderItem data={data[0].data} />
        </Animated.View>
      </TouchableOpacity>
      <Animated.View style={[animatedStyles, styles.selectionWrapper]}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <SelectorRenderItem onPress={() => handleListItemPress(item)}>
              {RenderItem && <RenderItem data={item.data} />}
            </SelectorRenderItem>
          )}
          keyExtractor={item => item.data}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 40,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomStartRadius: 7,
    borderBottomEndRadius: 7,
    borderColor: COLORS.modalBackgroundColor,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingStart: 3,
    alignItems: 'center',
  },
  selectionWrapper: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: COLORS.modalBackgroundColor,
    borderBottomStartRadius: 7,
    borderBottomEndRadius: 7,
  },
  selectedText: {
    fontSize: 16,
  },
});

const renderItemStyles = StyleSheet.create({
  container: {
    padding: 5,
    marginLeft: 20,
  },
});
