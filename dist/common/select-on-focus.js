'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _aureliaFramework = require('aurelia-framework');

var SelectOnFocus = (function () {
  function SelectOnFocus(element) {
    _classCallCheck(this, _SelectOnFocus);

    this.element = element;
    this.blockMouseUp = false;

    this._boundOnFocus = this.onFocus.bind(this);
    this._boundOnMouseDown = this.onMouseDown.bind(this);
    this._boundOnMouseUp = this.onMouseUp.bind(this);
  }

  _createClass(SelectOnFocus, [{
    key: 'attached',
    value: function attached() {
      this.element.addEventListener('focus', this._boundOnFocus);
      this.element.addEventListener('mousedown', this._boundOnMouseDown);
      this.element.addEventListener('mouseup', this._boundOnMouseUp);
    }
  }, {
    key: 'detached',
    value: function detached() {
      this.element.removeEventListener('focus', this._boundOnFocus);
      this.element.removeEventListener('mousedown', this._boundOnMouseDown);
      this.element.removeEventListener('mouseup', this._boundOnMouseUp);
    }
  }, {
    key: 'onFocus',
    value: function onFocus() {
      this.element.select();
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown() {
      this.blockMouseUp = this.element !== document.activeElement;
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(event) {
      if (this.blockMouseUp) {
        event.preventDefault();
      }
    }
  }]);

  var _SelectOnFocus = SelectOnFocus;
  SelectOnFocus = (0, _aureliaFramework.inject)(Element)(SelectOnFocus) || SelectOnFocus;
  SelectOnFocus = (0, _aureliaFramework.customAttribute)('selectonfocus')(SelectOnFocus) || SelectOnFocus;
  return SelectOnFocus;
})();

exports.SelectOnFocus = SelectOnFocus;