import React, {FC} from 'react';
import {Image, StyleSheet, View} from 'react-native';

interface IAppIcon {
  icon: any;
  width: number;
  height: number;
}

export const AppIcon: FC<IAppIcon> = ({icon, width, height}) => {
  return (
    <View style={styles.container}>
      <Image style={{...styles.img, width, height}} source={icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  img: {
    width: 70,
    height: 50,
  },
});
