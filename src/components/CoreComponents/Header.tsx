import colors from 'assets/colors';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Icon from './Icon';
import Text from './Text';

interface Props {
  title?: string;
  leftIcon?: string;
  rightIcon?: string;
  leftIconOnPress?: () => void;
  rightIconOnPress?: () => void;
}

export default function Header(props: Props) {
  const {leftIcon, title, rightIcon, rightIconOnPress, leftIconOnPress} = props;
  const isIconExist = leftIcon || rightIcon;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        {isIconExist && (
          <Icon
            testID="header_left_icon"
            name={leftIcon}
            onPress={leftIconOnPress}
          />
        )}
        <Text numberOfLines={1} style={styles.title} title>
          {title}
        </Text>
        {isIconExist && (
          <Icon
            testID="header_right_icon"
            name={rightIcon}
            onPress={rightIconOnPress}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: colors.white,
    borderBottomColor: colors.black27,
    borderBottomWidth: 0.5,
  },
  subContainer: {
    height: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 10,
  },
});
