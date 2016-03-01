System.register([], function (_export) {
                          'use strict';

                          _export('configure', configure);

                          function configure(aurelia) {
                                                    aurelia.globalResources(['autocomplete-widget', 'combo', 'text-widget', 'checkbox', 'radiobutton', 'currency-input', 'text-display-widget', 'togglebutton', 'select-on-focus']);
                          }

                          return {
                                                    setters: [],
                                                    execute: function () {}
                          };
});