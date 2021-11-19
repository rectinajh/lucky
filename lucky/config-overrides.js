// const { useBabelRc, override } = require('customize-cra');
// const rewireUglifyjs = require('react-app-rewire-uglifyjs');
const { alias, configPaths } = require('react-app-rewire-alias');
module.exports = function override(config, env) {
    // config = rewireUglifyjs(config);
    config = alias(configPaths('./tsconfig.paths.json'))(config);
    return config;
};
