'use strict';

System.register([], function (_export, _context) {
  "use strict";

  function configure(aurelia) {
    aurelia.globalResources(['./combo', './text-widget', './checkbox', './radiobutton', './currency-input', './select-on-focus']);
  }

  _export('configure', configure);

  return {
    setters: [],
    execute: function () {}
  };
});