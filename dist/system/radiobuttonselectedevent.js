System.register([], function (_export) {
  "use strict";

  var RadioButtonSelectedEvent;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      RadioButtonSelectedEvent = function RadioButtonSelectedEvent(groupName, buttonLabel) {
        _classCallCheck(this, RadioButtonSelectedEvent);

        this.groupName = groupName;
        this.buttonLabel = buttonLabel;
      };

      _export("RadioButtonSelectedEvent", RadioButtonSelectedEvent);
    }
  };
});