const { declare } = require('@babel/helper-plugin-utils')
const genericNames = require('generic-names')

const CSS_MODULE_LOCAL_IDENT_NAME = '[local]_[hash:base64:6]'

module.exports = declare((api, options) => {
  // see docs about api at https://babeljs.io/docs/en/config-files#apicache
  api.assertVersion('^7.0.0')

  return {
    presets: [
      [
        require('@babel/preset-env'),
        {
          useBuiltIns: 'usage',
          corejs: 3,
          shippedProposals: true,
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
        'antd',
      ],
      [
        require('babel-plugin-import'),
        {
          libraryName: 'at-console-components',
          style: 'css',
        },
        'at-console-components',
      ],
      [
        require('babel-plugin-import'),
        {
          libraryName: 'auto-ui',
          libraryDirectory: 'es',
        },
        'auto-ui',
      ],
      [
        require('babel-plugin-import'),
        {
          libraryName: 'react-use',
          camel2DashComponentName: false,
        },
        'react-use',
      ],
      [
        require('babel-plugin-react-css-modules'),
        {
          generateScopedName: genericNames(CSS_MODULE_LOCAL_IDENT_NAME, { context: process.cwd() }),
          filetypes: {
            '.mcss': {
              syntax: 'postcss-scss',
            },
          },
          handleMissingStyleName: 'ignore',
          autoResolveMultipleImports: true,
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
