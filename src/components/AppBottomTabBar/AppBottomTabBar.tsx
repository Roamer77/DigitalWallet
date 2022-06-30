import React, {FC, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {COLORS} from '../../resources/colors';
import {DashboardIcon} from '../svgIcons/DashboardIcon';
import {SettingsIcon} from '../svgIcons/SettingsIcon';
import {ParticalsView} from './Particals/ParticalsView';
import {Tab} from './Tab/Tab';

interface IAppBottomTabBar {
  onNavigate: (index: number) => void;
}

export const AppBottomTabBar: FC<IAppBottomTabBar> = ({onNavigate}) => {
  const tabs = [
    {
      index: 0,
      icon: <DashboardIcon />,
    },
    {
      index: 1,
      icon: <SettingsIcon />,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <View style={styles.container}>
      <ParticalsView activeTabIndex={activeIndex} />
      {tabs.map(item => (
        <Tab
          onPress={() => {
            onNavigate(item.index);
            setActiveIndex(item.index);
          }}
          key={item.index.toString()}
          index={item.index}
          activeIndex={activeIndex}>
          {item.icon}
        </Tab>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 55,
    backgroundColor: COLORS.transactionItem,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 10,
  },
});
