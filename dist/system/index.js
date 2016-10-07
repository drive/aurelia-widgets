'use strict';

System.register([], function (_export, _context) {
                          "use strict";

                          function configure(aurelia) {
                                                    aurelia.globalResources(['./autocomplete-widget', './combo', './text-widget', './checkbox', './radiobutton', './currency-input', './text-display-widget', './togglebutton', './select-on-focus']);
                          }

                          _export('configure', configure);

                          return {
                                                    setters: [],
                                                    execute: function () {}
                          };
});