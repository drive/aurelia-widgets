define(['exports'], function (exports) {
                          'use strict';

                          Object.defineProperty(exports, "__esModule", {
                                                    value: true
                          });
                          exports.configure = configure;
                          function configure(aurelia) {
                                                    aurelia.globalResources(['./autocomplete-widget', './combo', './text-widget', './checkbox', './radiobutton', './currency-input', './text-display-widget', './togglebutton', './select-on-focus', './tooltip']);
                          }
});