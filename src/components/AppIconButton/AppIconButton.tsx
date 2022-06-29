import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {AppIcon} from '../AppIcon/AppIcon';

interface IAppIconButton {
  onPress: () => void;
  icon: any;
  styles?: any;
  width: number;
  height: number;
}

export const AppIconButton: FC<IAppIconButton> = ({
  onPress,
  icon,
  styles,
  width,
  height,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles}>
      <AppIcon width={width} height={height} icon={icon} />
    </TouchableOpacity>
  );
};
