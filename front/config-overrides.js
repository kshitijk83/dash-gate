const { override, fixBabelImports, addBabelPresets } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    ...addBabelPresets('@emotion/babel-preset-css-prop')
);
