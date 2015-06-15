'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _inject$bindable$customAttribute$bindingMode$computedFrom = require('aurelia-framework');

var _$ = require('jquery');

var _$2 = _interopRequireWildcard(_$);

var _autocomplete = require('devbridge/jQuery-Autocomplete');

var _autocomplete2 = _interopRequireWildcard(_autocomplete);

var AutoCompleteWidget = (function () {
  function AutoCompleteWidget(element) {
    _classCallCheck(this, _AutoCompleteWidget);

    this.element = element;
  }

  var _AutoCompleteWidget = AutoCompleteWidget;

  _createClass(_AutoCompleteWidget, [{
    key: 'bind',
    value: function bind() {
      this.apply();
    }
  }, {
    key: 'apply',
    value: function apply() {
      _$2['default'](this.element).autocomplete({
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
    }
  }]);

  AutoCompleteWidget = _inject$bindable$customAttribute$bindingMode$computedFrom.bindable({
    name: 'selectedItem',
    attribute: 'selected-item',
    defaultBindingMode: _inject$bindable$customAttribute$bindingMode$computedFrom.bindingMode.twoWay
  })(AutoCompleteWidget) || AutoCompleteWidget;
  AutoCompleteWidget = _inject$bindable$customAttribute$bindingMode$computedFrom.bindable({
    name: 'controller',
    attribute: 'controller',
    defaultBindingMode: _inject$bindable$customAttribute$bindingMode$computedFrom.bindingMode.twoWay
  })(AutoCompleteWidget) || AutoCompleteWidget;
  AutoCompleteWidget = _inject$bindable$customAttribute$bindingMode$computedFrom.customAttribute('autocomplete-widget')(AutoCompleteWidget) || AutoCompleteWidget;
  AutoCompleteWidget = _inject$bindable$customAttribute$bindingMode$computedFrom.inject(Element)(AutoCompleteWidget) || AutoCompleteWidget;
  return AutoCompleteWidget;
})();

exports.AutoCompleteWidget = AutoCompleteWidget;