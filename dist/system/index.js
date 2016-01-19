System.register([], function (_export) {
                          'use strict';

                          _export('configure', configure);

                          function configure(aurelia) {
                                                    aurelia.globalResources(['autocomplete-widget', 'combo', 'text-widget', 'checkbox', 'radiobutton', 'currency-input', 'text-display-widget', 'togglebutton']);
                          }

                          return {
                                                    setters: [],
                                                    execute: function () {}
                          };
});