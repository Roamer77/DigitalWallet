import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import React, {FC, useCallback} from 'react';
import {AppBottomTabBar} from '../components/AppBottomTabBar/AppBottomTabBar';
import {AppIcon} from '../components/AppIcon/AppIcon';
import {AppIconButton} from '../components/AppIconButton/AppIconButton';
import {BottomSheet} from '../components/BottomSheet/BottomSheet';
import {COLORS} from '../resources/colors';
import {Dashboard} from '../screens/Dashboard';
import {ScreenNames} from '../screens/ScreenNames';
import {Settings} from '../screens/Settings';
import {Statistics} from '../screens/Statistics';
import {useAppDispatch} from '../store/hooks';
import {setIsAddCardModalVisible} from '../store/redusers/appStateReducer';
import {DashboardStackNavigator} from './DashboardStackNavigator';
import {SettingStackNavigator} from './SettingStackNavigator';

interface IBottomTabsNavigator {}
const routs = [
  ScreenNames.DashboardStackNavigator,
  ScreenNames.SettingsStackNavigator,
];
const BottomTab = createBottomTabNavigator();
export const BottomTabsNavigator: FC<IBottomTabsNavigator> = ({}) => {
  const screenOptions = (route: RouteProp<ParamListBase, string>) => {
    let iconName;
    switch (route.name) {
      case ScreenNames.DashboardStackNavigator:
        iconName = require('../assets/TabIcons/Dashborad.png');
        break;
      case ScreenNames.SettingsStackNavigator:
        iconName = require('../assets/TabIcons/Settings.png');
        break;
      default:
        break;
    }
    return <AppIcon icon={iconName} width={25} height={25} />;
  };

  return (
    <BottomTab.Navigator
      tabBar={({navigation}) => {
        const navigateByRoutName = (index: number) => {
          navigation.navigate(routs[index]);
        };
        return <AppBottomTabBar onNavigate={navigateByRoutName} />;
      }}
      screenOptions={({route}) => ({
        tabBarIcon: () => screenOptions(route),
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.bottomTabBar,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#111',
      })}>
      <BottomTab.Screen
        name={ScreenNames.DashboardStackNavigator}
        component={DashboardStackNavigator}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: COLORS.bottomTabBar,
          },
        }}
        name={ScreenNames.SettingsStackNavigator}
        component={SettingStackNavigator}
      />
    </BottomTab.Navigator>
  );
};
