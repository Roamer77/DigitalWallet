import React, {FC} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {AppIconButton} from '../AppIconButton/AppIconButton';

interface IAppInteractiveHeader {}

const buttons = [
  {
    id: 0,
    icon: require('../../assets/InteractiveFunction/therdFunction.png'),
  },
  {
    id: 1,
    icon: require('../../assets/InteractiveFunction/secondFunction.png'),
  },
  {
    id: 2,
    icon: require('../../assets/InteractiveFunction/firstFunction.png'),
  },
  {
    id: 3,
    icon: require('../../assets/InteractiveFunction/secondFunction.png'),
  },
  {
    id: 4,
    icon: require('../../assets/InteractiveFunction/therdFunction.png'),
  },
  {
    id: 5,
    icon: require('../../assets/InteractiveFunction/secondFunction.png'),
  },
  {
    id: 6,
    icon: require('../../assets/InteractiveFunction/firstFunction.png'),
  },
  {
    id: 7,
    icon: require('../../assets/InteractiveFunction/secondFunction.png'),
  },
];
export const AppInteractiveHeader: FC<IAppInteractiveHeader> = ({}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={buttons}
        horizontal={true}
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View>
            <AppIconButton
              key={item.id}
              icon={item.icon}
              width={40}
              height={40}
              onPress={() => {}}
              styles={styles.item}
            />
            <Text style={styles.title}> Function name</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  item: {
    width: 44,
    height: 44,
    marginStart: 20,
  },
  title:{
    paddingStart:10,
  }
});
