import {createStackNavigator} from '@react-navigation/stack';

import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import React, {FC} from 'react';
import {Text, View, StyleSheet, Easing} from 'react-native';
import {Dashboard} from '../screens/Dashboard';
import {Statistics} from '../screens/Statistics';

interface IDashboardStackNavigator {}
const Stack = createSharedElementStackNavigator();
export const DashboardStackNavigator: FC<IDashboardStackNavigator> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: ({current: {progress}}) => {
          return {
            cardStyle: {
              opacity: progress,
            },
          };
        },
        cardStyle: {
          backgroundColor: 'transparent',
        },
      }}>
      <Stack.Screen name={'Dashboard'} component={Dashboard} />
      <Stack.Screen
        name={'Statistics'}
        component={Statistics}
        sharedElements={route => {
          const {item} = route.params;
          return [
            {
              id: `item.${item.id}.card`,
            },
          ];
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});
