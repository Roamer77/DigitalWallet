import React, {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

interface ISplashScreen {
  onAnimationFinish: () => void;
}

export const SplashScreen: FC<ISplashScreen> = ({onAnimationFinish}) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/LottiSplashScreen/7455-loading1.json')}
        autoPlay
        loop={false}
        onAnimationFinish={onAnimationFinish}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#4C3575'},
});
