const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const app = express();

const authenticationDoc = YAML.load('./yamls/AUTHENTICATION_V2.yaml');
const checkingDoc = YAML.load('./yamls/CHECKING.yaml');
const deviceDoc = YAML.load('./yamls/DEVICE.yaml');
const emailDoc = YAML.load('./yamls/EMAIL.yaml');
const fileDoc = YAML.load('./yamls/FILE.yaml');
const keyDoc = YAML.load('./yamls/KEY.yaml');
const loggingDoc = YAML.load('./yamls/LOGGING.yaml');
const marketDoc = YAML.load('./yamls/MARKET.yaml');
const notificationDoc = YAML.load('./yamls/NOTIFICATION.yaml');
const proxyDoc = YAML.load('./yamls/PROXY.yaml');
const rampDoc = YAML.load('./yamls/RAMP.yaml');
const relayerDoc = YAML.load('./yamls/RELAYER_V2.yaml');
const swapDoc = YAML.load('./yamls/SWAP.yaml');
const walletDoc = YAML.load('./yamls/WALLET.yaml');
// Load other documents similarly

const swaggerSpecs = {
  openapi: "3.0.0",
  info: {
    title: "Safle API Documentation",
    version: "1.0.0",
  },
  paths: {
    ...authenticationDoc.paths,
    ...checkingDoc.paths,
    ...deviceDoc.paths,
    ...emailDoc.paths,
    ...fileDoc.paths,
    ...keyDoc.paths,
    ...loggingDoc.paths,
    ...marketDoc.paths,
    ...notificationDoc.paths,
    ...proxyDoc.paths,
    ...rampDoc.paths,
    ...relayerDoc.paths,
    ...swapDoc.paths,
    ...walletDoc.paths
    // Include other paths here without schema conflicts
  },
  components: {
    schemas: {
      ...authenticationDoc.components.schemas,
      ...checkingDoc.components.schemas,
      ...deviceDoc.components.schemas,
      ...emailDoc.components.schemas,
      ...fileDoc.components.schemas,
      ...keyDoc.components.schemas,
      ...loggingDoc.components.schemas,
      ...marketDoc.components.schemas,
      ...notificationDoc.components.schemas,
      ...proxyDoc.components.schemas,
      ...rampDoc.components.schemas,
      ...relayerDoc.components.schemas,
      ...swapDoc.components.schemas,
      ...walletDoc.components.schemas,
      ...emailDoc.components.schemas,
      // Include other schemas here
    },
    securitySchemes: {
      ...authenticationDoc.components.securitySchemes,
      ...checkingDoc.components.securitySchemes,
      ...deviceDoc.components.securitySchemes,
      ...emailDoc.components.securitySchemes,
      ...fileDoc.components.securitySchemes,
      ...keyDoc.components.securitySchemes,
      ...loggingDoc.components.securitySchemes,
      ...marketDoc.components.securitySchemes,
      ...notificationDoc.components.securitySchemes,
      ...proxyDoc.components.securitySchemes,
      ...rampDoc.components.securitySchemes,
      ...relayerDoc.components.securitySchemes,
      ...swapDoc.components.securitySchemes,
      ...walletDoc.components.securitySchemes,
      ...emailDoc.components.securitySchemes
      // Add other security schemes here
    },
  },
//   servers: [
//     //   ...authenticationDoc.servers,
//       ...checkingDoc.servers,
//       ...deviceDoc.servers,
//       ...emailDoc.servers,
//       ...fileDoc.servers,
//       ...keyDoc.servers,
//       ...loggingDoc.servers,
//       ...marketDoc.servers,
//       ...notificationDoc.servers,
//       ...proxyDoc.servers,
//       ...rampDoc.servers,
//       ...relayerDoc.servers,
//       ...swapDoc.servers,
//       ...walletDoc.servers,
//       ...emailDoc.servers
//     // Add server configurations from each file if they need to display
//   ],
};

// Use the combined specs for Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.listen(3000, () => console.log('Server running'));