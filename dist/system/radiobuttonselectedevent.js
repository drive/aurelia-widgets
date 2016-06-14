"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var RadioButtonSelectedEvent;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export("RadioButtonSelectedEvent", RadioButtonSelectedEvent = function RadioButtonSelectedEvent(groupName, buttonLabel) {
        _classCallCheck(this, RadioButtonSelectedEvent);

        this.groupName = groupName;
        this.buttonLabel = buttonLabel;
      });

      _export("RadioButtonSelectedEvent", RadioButtonSelectedEvent);
    }
  };
});