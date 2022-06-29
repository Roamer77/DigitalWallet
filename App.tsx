import React, {useCallback, useEffect, useState} from 'react';
import {Alert, Button, View} from 'react-native';
import {Provider} from 'react-redux';
import {RootNavigator} from './src/navigation/RootNavigator';
import {SplashScreen} from './src/screens/SplashScreen';
import {store} from './src/store/store';
import {TimeImpl} from './src/TimeImpl';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  if (isLoading === false) {
    return <SplashScreen onAnimationFinish={() => setIsLoading(!isLoading)} />;
  } else {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
};

export default App;
