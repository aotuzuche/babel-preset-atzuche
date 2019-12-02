const { declare } = require('@babel/helper-plugin-utils')

module.exports = declare((api, options) => {
  // see docs about api at https://babeljs.io/docs/en/config-files#apicache
  api.assertVersion('^7.0.0')

  return {
    presets: [
      [
        require('@babel/preset-env'),
        {
          useBuiltIns: 'usage',
          modules: 'commonjs',
        },
      ],
      require('@babel/preset-react'),
    ],
    plugins: [
      require('@babel/plugin-transform-runtime'),
      require('@babel/plugin-proposal-object-rest-spread'),
      [
        require('babel-plugin-import'),
        {
          libraryName: 'antd',
          style: 'css',
        },
      ],
      [
        require('babel-plugin-react-css-modules'),
        {
          generateScopedName: '[local]_[hash:base64:6]',
          filetypes: {
            '.mcss': {
              syntax: 'postcss-scss',
            },
          },
          handleMissingStyleName: 'ignore',
        },
      ],
      require('@babel/plugin-syntax-dynamic-import'),
      require('@babel/plugin-syntax-import-meta'),
      [
        require('@babel/plugin-proposal-decorators'),
        {
          legacy: true,
        },
      ],
      require('@babel/plugin-proposal-class-properties'),
      require('@babel/plugin-proposal-json-strings'),
      require('@babel/plugin-proposal-function-sent'),
      require('@babel/plugin-proposal-export-namespace-from'),
      require('@babel/plugin-proposal-numeric-separator'),
      require('@babel/plugin-proposal-throw-expressions'),
      require('@babel/plugin-proposal-export-default-from'),
      require('@babel/plugin-proposal-logical-assignment-operators'),
      require('@babel/plugin-proposal-optional-chaining'),
      [
        require('@babel/plugin-proposal-pipeline-operator'),
        {
          proposal: 'minimal',
        },
      ],
      require('@babel/plugin-proposal-function-bind'),
      require('@babel/plugin-proposal-do-expressions'),
      require('@babel/plugin-proposal-nullish-coalescing-operator'),
    ],
  }
})
