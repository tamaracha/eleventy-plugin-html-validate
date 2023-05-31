'use strict'
const htmlValidatePlugin = require('./index.js')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(htmlValidatePlugin, { format: 'stylish' })
  return {
    dir: {
      input: 'sample'
    }
  }
}
