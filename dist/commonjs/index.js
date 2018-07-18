'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;
function configure(aurelia) {
  aurelia.globalResources(['./combo', './text-widget', './checkbox', './radiobutton', './currency-input', './text-display-widget', './select-on-focus', './tooltip']);
}