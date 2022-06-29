import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import React, {FC, useCallback} from 'react';
import {AppBottomTabBar} from '../components/AppBottomTabBar/AppBottomTabBar';
import {AppIcon} from '../components/AppIcon/AppIcon';
import {AppIconButton} from '../components/AppIconButton/AppIconButton';
import {COLORS} from '../resources/colors';
import {Dashboard} from '../screens/Dashboard';
import {ScreenNames} from '../screens/ScreenNames';
import {Settings} from '../screens/Settings';
import {Statistics} from '../screens/Statistics';
import {useAppDispatch} from '../store/hooks';
import {setIsAddCardModalVisible} from '../store/redusers/appStateReducer';
import {DashboardStackNavigator} from './DashboardStackNavigator';

interface IBottomTabsNavigator {}
const routs = [ScreenNames.Dashboard, ScreenNames.Settings];
const BottomTab = createBottomTabNavigator();
export const BottomTabsNavigator: FC<IBottomTabsNavigator> = ({}) => {
  const dispatch = useAppDispatch();
  const screenOptions = (route: RouteProp<ParamListBase, string>) => {
    let iconName;
    switch (route.name) {
      case ScreenNames.Dashboard:
        iconName = require('../assets/TabIcons/Dashborad.png');
        break;
      case ScreenNames.Settings:
        iconName = require('../assets/TabIcons/Settings.png');
        break;
      default:
        break;
    }
    return <AppIcon icon={iconName} width={25} height={25} />;
  };

  const openModalForCreationCard = useCallback(() => {
    dispatch(setIsAddCardModalVisible(true));
  }, [dispatch]);
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
        name={"DashboardStackNavigator"}
        component={DashboardStackNavigator}
      />
      {/* <BottomTab.Screen name={ScreenNames.Statistics} component={Statistics} /> */}
      <BottomTab.Screen
        options={{
          headerRight: () => (
            <AppIconButton
              icon={require('../assets/CardList/addCard.png')}
              width={45}
              height={45}
              onPress={openModalForCreationCard}
            />
          ),
          headerTitleStyle: {
            color: '#fff',
            fontSize: 25,
          },

          headerShown: true,
          headerStyle: {
            backgroundColor: COLORS.bottomTabBar,
          },
        }}
        name={ScreenNames.Settings}
        component={Settings}
      />
    </BottomTab.Navigator>
  );
};
