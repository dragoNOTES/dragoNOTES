/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    'src/app': '/_dist_',
  },
  exclude: [
    '**/node_modules/**/*',
    '**/__tests__/*',
    '**/*.@(spec|test).@(js|mjs)',
    'src/server/**/*',
  ],
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-dotenv'],
  install: ['@chakra-ui/react'],
  // TODO: complete the proxy setup and mount correctly
};
