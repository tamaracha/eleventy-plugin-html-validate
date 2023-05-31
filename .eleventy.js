'use strict'
const htmlValidatePlugin = require('./index.js')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(htmlValidatePlugin, { style: 'stylish' })
  return {
    dir: {
      input: 'sample'
    }
  }
}
