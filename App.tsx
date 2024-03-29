import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {RootNavigator} from './src/navigation/RootNavigator';
import {COLORS} from './src/resources/colors';
import {SplashScreen} from './src/screens/SplashScreen';
import {store} from './src/store/store';
import { enableFreeze } from "react-native-screens";
import { BottomSheet } from './src/components/BottomSheet/BottomSheet';
enableFreeze(true);

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const [isOpenPrimpt, openPrimpt] = useState(false);
  if (isLoading === false) {
    return <SplashScreen onAnimationFinish={() => setIsLoading(!isLoading)} />;
  } else {
    return (
      <Provider store={store}>
        <GestureHandlerRootView style={{flex: 1}}>
          <StatusBar backgroundColor={COLORS.transactionItem} />
          <RootNavigator />

        </GestureHandlerRootView>
      </Provider>
      // <View
      //   style={{
      //     flex: 1,
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //     backgroundColor: '#fff',
      //   }}>
      //   <TargetPrompt
      //     render={isOpenPrimpt}
      //     onPress={() => openPrimpt(!isOpenPrimpt)}>
      //     <Button
      //       title="how prompt"
      //       onPress={() => openPrimpt(!isOpenPrimpt)}
      //     />
      //   </TargetPrompt>
      // </View>
    );
  }
};

export default App;
