import React from 'react';
import {fireEvent, render, RenderAPI} from '@testing-library/react-native';
import {Header} from 'components/CoreComponents';
import '@testing-library/jest-native/extend-expect';

const propsWithLeftIcon = {
  leftIcon: 'back',
  leftIconOnPress: jest.fn(),
  title: 'Header',
  testID: 'header_for_test',
};

const propsWithLeftAndRightIcon = {
  leftIcon: 'back',
  leftIconOnPress: jest.fn(),
  title: 'Header',
  testID: 'header_for_test',
  rightIcon: 'back',
  rightIconOnPress: jest.fn(),
};

describe('Header with left icon component', () => {
  let provider: RenderAPI;

  beforeEach(() => {
    provider = render(<Header {...propsWithLeftIcon} />);
  });

  it('Check title exist', () => {
    provider.getByText(propsWithLeftIcon.title);
  });

  it('Check left icon exist', () => {
    provider.getByTestId('header_left_icon');
  });

  it('Check right icon gap exist', () => {
    provider.getByTestId('header_right_icon');
  });

  it('Check left icon onPress', () => {
    const leftIcon = provider.getByTestId('header_left_icon');
    fireEvent.press(leftIcon);
    expect(propsWithLeftIcon.leftIconOnPress).toHaveBeenCalled();
  });
});

describe('Header with left and right icon component', () => {
  let provider: RenderAPI;

  beforeEach(() => {
    provider = render(<Header {...propsWithLeftAndRightIcon} />);
  });

  it('Check title exist', () => {
    provider.getByText(propsWithLeftAndRightIcon.title);
  });

  it('Check left icon exist', () => {
    provider.getByTestId('header_left_icon');
  });

  it('Check right icon exist', () => {
    provider.getByTestId('header_right_icon');
  });

  it('Check left icon onPress', () => {
    const leftIcon = provider.getByTestId('header_left_icon');
    fireEvent.press(leftIcon);
    expect(propsWithLeftAndRightIcon.leftIconOnPress).toHaveBeenCalled();
  });

  it('Check right icon onPress', () => {
    const rightIcon = provider.getByTestId('header_right_icon');
    fireEvent.press(rightIcon);
    expect(propsWithLeftAndRightIcon.rightIconOnPress).toHaveBeenCalled();
  });
});
