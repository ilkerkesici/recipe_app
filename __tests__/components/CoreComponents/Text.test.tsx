import React from 'react';
import {fireEvent, render, RenderAPI} from '@testing-library/react-native';
import {Text} from 'components/CoreComponents';
import '@testing-library/jest-native/extend-expect';
import colors from 'assets/colors';

const props = {
  onPress: jest.fn(),
  testID: 'text_for_test',
  text: 'Press Me',
  style: {
    color: colors.error,
  },
};
describe('Text component', () => {
  let provider: RenderAPI;

  beforeEach(() => {
    provider = render(<Text {...props}>Hello World!</Text>);
  });

  it('Check text exist', () => {
    provider.getByTestId(props.testID);
  });

  it('Check text childiren exist', () => {
    provider.getByText('Hello World!');
  });

  it('Check onPress', () => {
    fireEvent.press(provider.getByTestId(props.testID));
    expect(props.onPress).toHaveBeenCalled();
  });

  it('Check style props passed to text', () => {
    expect(provider.getByTestId(props.testID)).toHaveStyle(props.style);
  });
});
