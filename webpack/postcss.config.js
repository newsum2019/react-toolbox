const path = require('path');

module.exports = () => ({
  plugins: [
    require('postcss-import')({
      root: path.join(__dirname, '../'),
      path: path.join(__dirname, '../components')
    }),
    require('postcss-mixins'),
    require('postcss-each'),
    require('postcss-apply'),
    require('postcss-preset-env')({
      stage: 0, // required to get all features that were from cssnext
      features: {
        'custom-properties': {
          preserve: false // required to output values instead of variables
        },
        'color-mod-function': true, // required to use color-mod()
      }
    }),
    require('postcss-normalize'),
    require('postcss-reporter')({
      clearReportedMessages: true
    })
  ]
})
