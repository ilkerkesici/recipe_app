import React from 'react';
import {fireEvent, render, RenderAPI} from '@testing-library/react-native';
import {Icon} from 'components/CoreComponents';
import '@testing-library/jest-native/extend-expect';

const props = {
  onPress: jest.fn(),
  testID: 'icon_for_test',
};
describe('Icon component', () => {
  let provider: RenderAPI;

  beforeEach(() => {
    provider = render(<Icon name="back" {...props} />);
  });

  it('Check icon container exist', () => {
    provider.getByTestId(props.testID);
  });

  it('Check icon is not empty', () => {
    expect(provider.queryByTestId('empty_icon')).toBeNull();
  });

  it('Check icon container onPress', () => {
    fireEvent.press(provider.getByTestId(props.testID));
    expect(props.onPress).toHaveBeenCalled();
  });
});

describe('Empty icon component', () => {
  let provider: RenderAPI;

  beforeEach(() => {
    provider = render(<Icon name="" {...props} />);
  });

  it('Check icon container exist', () => {
    provider.getByTestId(props.testID);
  });

  it('Check icon is empty', () => {
    provider.getByTestId('empty_icon');
  });
});
