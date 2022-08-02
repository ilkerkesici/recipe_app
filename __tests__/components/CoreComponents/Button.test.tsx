import React from 'react';
import {fireEvent, render, RenderAPI} from '@testing-library/react-native';
import {Button} from 'components/CoreComponents';
import '@testing-library/jest-native/extend-expect';

const props = {
  onPress: jest.fn(),
  testID: 'button_for_test',
  text: 'Press Me',
};
describe('Button component', () => {
  let provider: RenderAPI;

  beforeEach(() => {
    provider = render(<Button {...props} />);
  });

  it('Check button exist', () => {
    provider.getByTestId(props.testID);
  });

  it('Check text exist', () => {
    provider.getByText(props.text);
  });

  it('Check onPress', () => {
    fireEvent.press(provider.getByTestId(props.testID));
    expect(props.onPress).toHaveBeenCalled();
  });
});
