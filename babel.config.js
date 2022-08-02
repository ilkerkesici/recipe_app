module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.ios.js',
          '.android.js',
          '.js',
          '.json',
        ],
        alias: {
          screens: './src/screens',
          components: './src/components',
          helpers: './src/helpers',
          config: './src/config',
          containers: './src/containers',
          assets: './src/assets',
          services: './src/services',
        },
      },
    ],
  ],
};
