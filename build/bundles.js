module.exports = {
  "dist/aurelia": {
    "includes": [
      "aurelia-framework",
      "aurelia-bootstrapper",
      "aurelia-fetch-client",
      "aurelia-router",
      "aurelia-animator-css",
      "aurelia-templating-binding",
      "aurelia-polyfills",
      "aurelia-templating-resources",
      "aurelia-templating-router",
      "aurelia-loader-default",
      "aurelia-history-browser",
      "aurelia-logging-console",
      "aurelia-plugins-google-recaptcha"
    ],
    "options": {
      "inject": true,
      "minify": true,
      "depCache": false,
      "rev": false
    }
  }
};
