import React, {FC, useEffect, useRef, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';

interface ITimeImpl {
  wasTimerStared: boolean;
  changeTimerState: (state: boolean) => void;
  callback: () => void;
  startTime: number;
}

const displayTimeInCurrentFormat = (seconds: number) => {
  const min = Math.floor((seconds / 60) % 60);
  const sec = Math.floor(seconds % 60);
  let displayMins = min < 10 ? `0${min}` : min;
  let displaySecs = sec < 10 ? `0${sec}` : sec;

  return {
    displayMins,
    displaySecs,
  };
};
export const TimeImpl: FC<ITimeImpl> = ({
  wasTimerStared,
  changeTimerState,
  callback,
  startTime,
}) => {
  const [seconds, setSecond] = useState(startTime);
  const timer = useRef<any>();

  useEffect(() => {
    if (wasTimerStared) {
      setSecond(startTime);
      BackgroundTimer.start();
      timer.current = BackgroundTimer.setInterval(() => {
        setSecond(prev => prev - 1);
      }, 1000);
      BackgroundTimer.stop();
    }
    if (wasTimerStared === false) {
      BackgroundTimer.clearInterval(timer.current);
    }
  }, [wasTimerStared]);

  useEffect(() => {
    if (seconds === 0) {
      setSecond(0);
      callback();
      changeTimerState(false);
    }
  }, [seconds]);
  useEffect(() => {
    return () => {
      BackgroundTimer.clearInterval(timer.current);
    };
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {displayTimeInCurrentFormat(seconds).displayMins} :{' '}
        {displayTimeInCurrentFormat(seconds).displaySecs}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 30,
  },
});
