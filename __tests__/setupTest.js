import '@testing-library/jest-native/extend-expect';

jest.mock('@react-navigation/native', () => {
  const actualNavigation = jest.requireActual('@react-navigation/native');

  return {
    ...actualNavigation,
    useFocusEffect: () => jest.fn(),
    useIsFocused: () => ({
      navigation: () => jest.fn(),
    }),
    useNavigation: () => ({
      goBack: jest.fn(),
      navigate: jest.fn(),
      addListener: jest.fn(),
    }),
    useRoute: jest.fn(),
  };
});

jest.mock('react-native/Libraries/Utilities/Dimensions', () => {
  return {
    get: jest.fn().mockReturnValue({
      fontScale: 1,
      height: 684,
      scale: 2.625,
      width: 412,
    }),
  };
});

jest.mock('axios', () => {
  return Object.assign(jest.fn(), {
    create: jest.fn(() => ({
      get: jest.fn(url => {
        return Promise.resolve({data: {}});
      }),
      interceptors: {
        request: {use: jest.fn(), eject: jest.fn()},
        response: {use: jest.fn(), eject: jest.fn()},
      },
    })),
    post: jest.fn((url, data) => {
      return Promise.resolve({data: {}});
    }),
  });
});

jest.mock('react-native-vector-icons/Ionicons', () => ({
  loadFont: jest.fn(),
}));
