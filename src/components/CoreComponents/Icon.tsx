import colors from 'assets/colors';
import React from 'react';
import {Insets, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

Ionicons.loadFont();

interface IconProps {
  color?: string;
  size?: number;
  name?: string;
  onPress?: () => void;
  testID?: string;
}

const DEFAULT_SIZE = 30;
const DEFAULT_COLOR = colors.black87;

const Back = ({size, color}: IconProps) => (
  <Ionicons
    name={'ios-arrow-back'}
    size={size || DEFAULT_SIZE}
    color={color || DEFAULT_COLOR}
  />
);

function PureIcon(props: IconProps) {
  if (props.name === 'back') {
    return <Back {...props} />;
  }

  return (
    <View testID="empty_icon" style={{width: props.size || DEFAULT_SIZE}} />
  );
}

export default function Icon(props: IconProps) {
  const {onPress, testID} = props;
  return (
    <TouchableOpacity
      testID={testID}
      activeOpacity={onPress ? 0.5 : 1}
      onPress={onPress}
      hitSlop={onPress ? inset : undefined}>
      <PureIcon {...props} />
    </TouchableOpacity>
  );
}

const inset: Insets = {top: 5, left: 5, right: 5, bottom: 5};
