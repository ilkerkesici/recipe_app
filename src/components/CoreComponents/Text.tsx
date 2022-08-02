import React from 'react';
import {Text as ReactText, StyleSheet, TextProps} from 'react-native';

interface Props extends TextProps {
  title?: boolean;
}

export default function Text(props: Props) {
  const titleStyle = props.title ? styles.title : undefined;
  const textStyle = [titleStyle, props.style];
  return (
    <ReactText {...props} style={textStyle}>
      {props.children}
    </ReactText>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
