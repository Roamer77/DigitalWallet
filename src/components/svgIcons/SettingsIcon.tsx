import React, {FC} from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

interface IIcon {
  isActive?: boolean;
}
export const SettingsIcon: FC<IIcon> = ({isActive}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 24 24"
    fill={isActive ? '#FFE4B5' : '#fff'}
    stroke="#111"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-credit-card">
    <Rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
    <Path d="M1 10h22" />
  </Svg>
);
