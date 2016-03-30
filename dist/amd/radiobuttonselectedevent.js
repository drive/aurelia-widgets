define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var RadioButtonSelectedEvent = exports.RadioButtonSelectedEvent = function RadioButtonSelectedEvent(groupName, buttonLabel) {
    _classCallCheck(this, RadioButtonSelectedEvent);

    this.groupName = groupName;
    this.buttonLabel = buttonLabel;
  };
});