import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Dashboard} from '../screens/Dashboard';
import {Statistics} from '../screens/Statistics';

interface IDashboardStackNavigator {}
const Stack = createNativeStackNavigator();
export const DashboardStackNavigator: FC<IDashboardStackNavigator> = ({}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Dashboard'} component={Dashboard} />
      <Stack.Screen name={'Statistics'} component={Statistics} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});
