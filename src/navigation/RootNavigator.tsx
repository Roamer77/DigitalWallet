import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import {BottomTabsNavigator} from './BottomTabsNavigator';
interface IRootNavigator {}

export const RootNavigator: FC<IRootNavigator> = ({}) => {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
};
