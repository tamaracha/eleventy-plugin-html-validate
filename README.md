# Eleventy Plugin HTML-validate

In my static websites, I want my HTML output to be valid.
Eleventy itself is relatively lean, but it offers a good plugin API.
This plugin …

- … validates generated HTML pages using [HTML-validate] after a build.
- … prints the results to the console using one of the [report formatters] offered by [HTML-validate].
- … respects and loads HTML-validate config files in the project, if available.
- … reloads the HTML-validate config, when a change in the respective config file is detected.

## Installation

`npm i tamaracha/eleventy-plugin-html-validate`

## Usage

In your eleventy config, add the plugin and optionally supply your preferred report style:

```js
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(require('eleventy-plugin-html-validate'), {
    format: 'stylish',
    config: { extends: ['html-validate:recommended'] }
  })
  return {}
}
```

Currently, the validation runs on eleventy-after events instead of registering itself as a linter.
This is because I want it to run after transforms have finished.

## Configuration

The plugin looks for the official HTML-validate configuration files as described in their [usage guide].
Static config can be given in the plugin options as shown in the example above.
It is merged with the config files.

## License

[MIT](LICENSE.txt)

[html-validate]: https://html-validate.org/
[report formatters]: https://html-validate.org/dev/using-api.html
[usage guide]: https://html-validate.org/usage/index.html
