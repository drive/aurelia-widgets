System.register(["babel-runtime/helpers/class-call-check"], function (_export) {
  var _classCallCheck, RadioButtonSelectedEvent;

  return {
    setters: [function (_babelRuntimeHelpersClassCallCheck) {
      _classCallCheck = _babelRuntimeHelpersClassCallCheck["default"];
    }],
    execute: function () {
      "use strict";

      RadioButtonSelectedEvent = function RadioButtonSelectedEvent(groupName, buttonLabel) {
        _classCallCheck(this, RadioButtonSelectedEvent);

        this.groupName = groupName;
        this.buttonLabel = buttonLabel;
      };

      _export("RadioButtonSelectedEvent", RadioButtonSelectedEvent);
    }
  };
});