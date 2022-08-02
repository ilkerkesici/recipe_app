import React from 'react';
import {ActivityIndicator, Platform, StyleSheet, View} from 'react-native';
import Colors from 'assets/colors';

interface Props {
  loading: boolean | null | undefined;
  testID?: string;
}

export default function Spinner({
  loading = false,
  testID,
}: Props): JSX.Element | null {
  return loading ? (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        testID={testID}
        color={Platform.OS === 'android' ? Colors.success : Colors.black87}
      />
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999999,
  },
});
