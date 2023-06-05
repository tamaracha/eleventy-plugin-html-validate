'use strict'
const { HtmlValidate, FileSystemConfigLoader, Reporter, formatterFactory } = require('html-validate')
const pm = require('picomatch')
const CONFIG_PATTERN = '.htmlvalidate.(js|cjs|json)'
const CONFIG_PATTERN_R = pm(CONFIG_PATTERN)

module.exports = function (eleventyConfig, { config, format } = { format: 'text' }) {
  const htmlValidate = new HtmlValidate(new FileSystemConfigLoader(config))
  const formatter = formatterFactory(format)
  eleventyConfig.addWatchTarget(CONFIG_PATTERN)
  eleventyConfig.on('eleventy.beforeWatch', async (changedFiles) => {
    if (changedFiles.some((f) => CONFIG_PATTERN_R(f))) {
      htmlValidate.flushConfigCache()
    }
  })
  eleventyConfig.on('eleventy.after', async function ({ results }) {
    const reports = await Promise.all(
      results
        .filter((r) => r.outputPath.endsWith('.html'))
        .map((r) => htmlValidate.validateString(r.content, r.outputPath))
    )
    const report = Reporter.merge(reports)
    if (!report.valid) {
      console.log(formatter(report.results))
    }
  })
}
