import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IIcon {
  isActive?: boolean;
}
export const DashboardIcon = ({isActive}: IIcon) => {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 24 24"
      fill={isActive ? '#FFE4B5' : '#fff'}
      stroke="#111"
      strokeWidth={1}
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-grid">
      <Path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
    </Svg>
  );
};
