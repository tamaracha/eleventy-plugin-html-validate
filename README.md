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

First, create a [HTML-validate] config file in your project as described in the [usage guide].
This could be, e.g., a `.htmlvalidate.js`:

```js
module.exports = {
  extends: ['html-validate:recommended'],
  elements: ['html5']
}
```

In your eleventy config, add the plugin and optionally supply your preferred report style:

```js
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(require('eleventy-plugin-html-validate'), {
    format: 'stylish'
  })
  return {}
}
```

Currently, the validation runs on eleventy-after events instead of registering itself as a linter.
This is because I want it to run after transforms have finished.

## Configuration

The plugin looks for the official HTML-validate configuration files as described in their [usage guide].
You can put different config files in the subfolders of your source templates, the plugin looks them up from the linted file's input path.

## License

[MIT](LICENSE.txt)

[html-validate]: https://html-validate.org/
[report formatters]: https://html-validate.org/dev/using-api.html
[usage guide]: https://html-validate.org/usage/index.html
