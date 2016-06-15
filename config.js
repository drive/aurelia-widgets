System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "*": "*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "aurelia-widgets/*": "dist/system/*"
  },

  map: {
    "aurelia-animator-velocity": "npm:aurelia-animator-velocity@1.0.0-beta.2.0.0",
    "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.2.0.5",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.1.0",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.2.0.0",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.3.0.0",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.2.0.0",
    "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.3.0.2",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "bootstrap-toggle": "npm:bootstrap-toggle@2.2.2",
    "devbridge-autocomplete": "npm:devbridge-autocomplete@1.2.25",
    "jquery": "npm:jquery@2.2.0",
    "numeral": "npm:numeral@1.5.3",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.5"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "npm:jquery@2.2.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-velocity@1.0.0-beta.2.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.3.0.2",
      "velocity-animate": "npm:velocity-animate@1.2.3"
    },
    "npm:aurelia-binding@1.0.0-beta.2.0.5": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.3.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.2.0.0"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.2.1.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.3.0"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.2.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.0"
    },
    "npm:aurelia-loader@1.0.0-beta.2.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.2.0.0"
    },
    "npm:aurelia-metadata@1.0.0-beta.2.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.3.0"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.3.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.3.0"
    },
    "npm:aurelia-polyfills@1.0.0-beta.2.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.3.0"
    },
    "npm:aurelia-task-queue@1.0.0-beta.2.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.3.0"
    },
    "npm:aurelia-templating@1.0.0-beta.3.0.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.2.0.5",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.1.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.2.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.3.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.2.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.2.0.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:devbridge-autocomplete@1.2.25": {
      "jquery": "npm:jquery@2.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:numeral@1.5.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:process@0.11.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:velocity-animate@1.2.3": {
      "jquery": "npm:jquery@2.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
