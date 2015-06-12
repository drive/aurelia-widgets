'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _inject$bindable$customElement$bindingMode$computedFrom = require('aurelia-framework');

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

  _createDecoratedClass(_AutoCompleteWidget, [{
    key: 'bind',
    value: function bind() {
      this.apply();
    }
  }, {
    key: 'isShowing',
    decorators: [_inject$bindable$customElement$bindingMode$computedFrom.computedFrom('title')],
    get: function () {
      return this.title != undefined && this.title.length > 0;
    }
  }, {
    key: 'apply',
    value: function apply() {
      _$2['default'](this.element).find('input').autocomplete({
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

  AutoCompleteWidget = _inject$bindable$customElement$bindingMode$computedFrom.bindable('title')(AutoCompleteWidget) || AutoCompleteWidget;
  AutoCompleteWidget = _inject$bindable$customElement$bindingMode$computedFrom.bindable({
    name: 'selectedItem',
    attribute: 'selected-item',
    defaultBindingMode: _inject$bindable$customElement$bindingMode$computedFrom.bindingMode.twoWay
  })(AutoCompleteWidget) || AutoCompleteWidget;
  AutoCompleteWidget = _inject$bindable$customElement$bindingMode$computedFrom.bindable({
    name: 'controller',
    attribute: 'controller',
    defaultBindingMode: _inject$bindable$customElement$bindingMode$computedFrom.bindingMode.twoWay
  })(AutoCompleteWidget) || AutoCompleteWidget;
  AutoCompleteWidget = _inject$bindable$customElement$bindingMode$computedFrom.customElement('autocomplete-widget')(AutoCompleteWidget) || AutoCompleteWidget;
  AutoCompleteWidget = _inject$bindable$customElement$bindingMode$computedFrom.inject(Element)(AutoCompleteWidget) || AutoCompleteWidget;
  return AutoCompleteWidget;
})();

exports.AutoCompleteWidget = AutoCompleteWidget;