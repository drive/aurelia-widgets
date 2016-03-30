'use strict';

System.register([], function (_export, _context) {
                          return {
                                                    setters: [],
                                                    execute: function () {
                                                                              function configure(aurelia) {
                                                                                                        aurelia.globalResources(['./autocomplete-widget', './combo', './text-widget', './checkbox', './radiobutton', './currency-input', './text-display-widget', './togglebutton', './select-on-focus']);
                                                                              }

                                                                              _export('configure', configure);
                                                    }
                          };
});