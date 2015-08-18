'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaFramework = require('aurelia-framework');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _devbridgeJQueryAutocomplete = require('devbridge/jQuery-Autocomplete');

var _devbridgeJQueryAutocomplete2 = _interopRequireDefault(_devbridgeJQueryAutocomplete);

var AutoCompleteWidget = (function () {
  function AutoCompleteWidget(element) {
    _classCallCheck(this, _AutoCompleteWidget);

    this.element = element;
  }

  _createClass(AutoCompleteWidget, [{
    key: 'bind',
    value: function bind() {
      this.apply();
    }
  }, {
    key: 'unbind',
    value: function unbind() {
      (0, _jquery2['default'])(this.element).find('input').autocomplete('dispose');
    }
  }, {
    key: 'apply',
    value: function apply() {
      (0, _jquery2['default'])(this.element).find('input').autocomplete({
        lookup: this.lookup.bind(this),
        onSelect: this.onSelect.bind(this)
      });
    }
  }, {
    key: 'lookup',
    value: function lookup(query, done) {
      this.controller.search(query).then(function (results) {
        done(results);
      });
    }
  }, {
    key: 'onSelect',
    value: function onSelect(suggestion) {
      this.selectedItem = suggestion.data;

      this.displayedText = suggestion.value;
    }
  }]);

  var _AutoCompleteWidget = AutoCompleteWidget;
  AutoCompleteWidget = (0, _aureliaFramework.bindable)('title')(AutoCompleteWidget) || AutoCompleteWidget;
  AutoCompleteWidget = (0, _aureliaFramework.bindable)({
    name: 'displayedText',
    attribute: 'displayed-text',
    defaultBindingMode: _aureliaFramework.bindingMode.twoWay
  })(AutoCompleteWidget) || AutoCompleteWidget;
  AutoCompleteWidget = (0, _aureliaFramework.bindable)({
    name: 'selectedItem',
    attribute: 'selected-item',
    defaultBindingMode: _aureliaFramework.bindingMode.twoWay
  })(AutoCompleteWidget) || AutoCompleteWidget;
  AutoCompleteWidget = (0, _aureliaFramework.bindable)({
    name: 'controller',
    attribute: 'controller',
    defaultBindingMode: _aureliaFramework.bindingMode.twoWay
  })(AutoCompleteWidget) || AutoCompleteWidget;
  AutoCompleteWidget = (0, _aureliaFramework.customElement)('autocomplete-widget')(AutoCompleteWidget) || AutoCompleteWidget;
  AutoCompleteWidget = (0, _aureliaFramework.inject)(Element)(AutoCompleteWidget) || AutoCompleteWidget;
  return AutoCompleteWidget;
})();

exports.AutoCompleteWidget = AutoCompleteWidget;