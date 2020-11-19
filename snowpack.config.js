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
  installOptions: {
    polyfillNode: true,
  },
  install: ['@chakra-ui/react', '@chakra-ui/icons', 'styled-components'],
  proxy: {
    '/api': 'http://localhost:3000/api',
    '/auth': 'http://localhost:3000/auth',
  },
};
