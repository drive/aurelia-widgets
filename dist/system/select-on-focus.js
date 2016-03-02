System.register(['babel-runtime/helpers/create-class', 'babel-runtime/helpers/class-call-check', 'aurelia-framework'], function (_export) {
  var _createClass, _classCallCheck, customAttribute, inject, SelectOnFocus;

  return {
    setters: [function (_babelRuntimeHelpersCreateClass) {
      _createClass = _babelRuntimeHelpersCreateClass['default'];
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _classCallCheck = _babelRuntimeHelpersClassCallCheck['default'];
    }, function (_aureliaFramework) {
      customAttribute = _aureliaFramework.customAttribute;
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      'use strict';

      SelectOnFocus = (function () {
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
        SelectOnFocus = inject(Element)(SelectOnFocus) || SelectOnFocus;
        SelectOnFocus = customAttribute('selectonfocus')(SelectOnFocus) || SelectOnFocus;
        return SelectOnFocus;
      })();

      _export('SelectOnFocus', SelectOnFocus);
    }
  };
});