const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-dark-mode'],
  webpackFinal: async (config) => {
    // CSS Setup
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
        {
          loader: require.resolve('sass-resources-loader'),
          options: {
            // core.scss contains variables, functions, mixins..
            resources: path.resolve(__dirname, '../src/styles/index.scss'),
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });
    // Typescript setup
    config.resolve.extensions.push('.ts', '.tsx', '.scss');
    config.resolve.alias = {
      '@config': resolve('../src/config.ts'),
      '@components': resolve('../src/components'),
      '@constants': resolve('../src/constants'),
      '@types': resolve('../src/types'),
      '@utils': resolve('../src/utils'),
      '@styles': resolve('../src/styles'),
      '@hooks': resolve('../src/hooks'),
      '@assets': resolve('../src/assets'),
    };
    // Return the altered config
    return config;
  },
};
