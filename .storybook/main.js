import svgr from 'vite-plugin-svgr';

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": "@storybook/react-vite",
  async viteFinal(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(svgr({
      svgrOptions: {
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  collapseGroups: false,
                },
              },
            },
          ],
        },
      },
    }));
    return config;
  },
};
export default config;