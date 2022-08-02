import colors from 'assets/colors';
import React from 'react';
import {StyleSheet, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import Text from './Text';

interface Props {
  textStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  onPress?: () => void;
  text: string;
  testID?: string;
}

export default function Button(props: Props) {
  const {text, textStyle, buttonStyle, onPress, testID} = props;
  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 5,
    paddingVertical: 5,
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
  },
});
