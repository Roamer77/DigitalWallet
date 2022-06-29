import React, {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useAnimatedStyle, useSharedValue} from 'react-native-reanimated';
import {Partical} from './Partical';

interface IParticalsView {
  activeTabIndex: number;
}
const topPaticals = [0, 1, 2, 3];
const middlePaticals = [0, 1, 2, 3];
const bottomPaticals = [0, 1, 2, 3];

const tabAreaWidth = 70;
const tabPadding = 70;
export const ParticalsView: FC<IParticalsView> = ({activeTabIndex}) => {
  return (
    <View style={styles.container}>
      {topPaticals.map(item => (
        <Partical
          key={item.toString()}
          particalIndex={item}
          activeTabIndex={activeTabIndex}
          tabAreaWidth={tabAreaWidth}
          tabPadding={tabPadding}
          transitionType={'top'}
        />
      ))}
      {middlePaticals.map(item => (
        <Partical
          key={item.toString()}
          particalIndex={item}
          activeTabIndex={activeTabIndex}
          tabAreaWidth={tabAreaWidth}
          tabPadding={tabPadding}
          transitionType={'middle'}
          style={{top: 20}}
        />
      ))}
      {bottomPaticals.map(item => (
        <Partical
          key={item.toString()}
          particalIndex={item}
          activeTabIndex={activeTabIndex}
          tabAreaWidth={tabAreaWidth}
          tabPadding={tabPadding}
          transitionType={'bottom'}
          style={{top: 30}}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    position: 'absolute',
  },
});
