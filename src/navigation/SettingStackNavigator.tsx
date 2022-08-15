import {createStackNavigator} from '@react-navigation/stack';
import React, {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {AddNewCardScreen} from '../screens/AddNewCardScreen';
import {ScreenNames} from '../screens/ScreenNames';
import {Settings} from '../screens/Settings';

interface ISettingStackNavigator {}

const Stack = createStackNavigator();
export const SettingStackNavigator: FC<ISettingStackNavigator> = ({}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ScreenNames.Settings} component={Settings} />
      <Stack.Screen
        name={ScreenNames.AddNewCard}
        component={AddNewCardScreen}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});
