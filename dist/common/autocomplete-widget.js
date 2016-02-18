'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaTemplating = require('aurelia-templating');

var _aureliaBinding = require('aurelia-binding');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('devbridge-autocomplete');

var AutoCompleteWidget = (function () {
  var _instanceInitializers = {};
  var _instanceInitializers = {};

  _createDecoratedClass(AutoCompleteWidget, [{
    key: 'onchange',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  function AutoCompleteWidget(element) {
    _classCallCheck(this, _AutoCompleteWidget);

    _defineDecoratedPropertyDescriptor(this, 'onchange', _instanceInitializers);

    this.element = element;
    this.showingSuggestions = false;
  }

  _createDecoratedClass(AutoCompleteWidget, [{
    key: 'bind',
    value: function bind() {
      this.input = this.element.querySelector('input');
      this.apply();
    }
  }, {
    key: 'unbind',
    value: function unbind() {
      (0, _jquery2['default'])(this.input).autocomplete('dispose');
    }
  }, {
    key: 'apply',
    value: function apply() {
      this.input.value = this._formatSelectionValue(this.selectedItem);

      (0, _jquery2['default'])(this.input).autocomplete({
        lookup: this.lookup.bind(this),
        onSelect: this.onSelect.bind(this),
        onInvalidateSelection: this.onInvalidateSelection.bind(this),
        transformResult: this.transformResult.bind(this),
        beforeRender: this.suggestionsShown.bind(this),
        onHide: this.suggestionsHidden.bind(this),
        deferRequestBy: 200,
        autoSelectFirst: this.autoSelectFirstResult
      });
      (0, _jquery2['default'])(this.input).data('autocomplete').selection = this.selectedItem;
    }
  }, {
    key: 'selectedItemChanged',
    value: function selectedItemChanged(newValue) {
      this.input.value = this._formatSelectionValue(newValue);
      (0, _jquery2['default'])(this.input).data('autocomplete').selection = newValue;
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
      this._setSelectedItem(suggestion.data);
    }
  }, {
    key: 'onInvalidateSelection',
    value: function onInvalidateSelection(param) {
      this._setSelectedItem(null);
    }
  }, {
    key: 'transformResult',
    value: function transformResult(response) {
      return {
        suggestions: _jquery2['default'].map(response, function (dataItem) {
          return { value: this._formatSelectionValue(dataItem), data: dataItem };
        })
      };
    }
  }, {
    key: 'suggestionsShown',
    value: function suggestionsShown(container) {
      var _$$0$classList;

      this.showingSuggestions = true;

      if (this.customCSS !== '') (_$$0$classList = (0, _jquery2['default'])(container)[0].classList).add.apply(_$$0$classList, _toConsumableArray(this.customCSS.split(',')));
    }
  }, {
    key: 'suggestionsHidden',
    value: function suggestionsHidden(container) {
      var _this = this;

      setTimeout(function () {
        _this.showingSuggestions = false;
      }, 250);
    }
  }, {
    key: 'keyUpListener',
    value: function keyUpListener(event) {
      if (event.which === 13 && !this.showingSuggestions) {
        if (this.onenterpressed) {
          this.onenterpressed();
          event.preventDefault();
        }
      }
    }
  }, {
    key: 'selectAll',
    value: function selectAll() {
      this.input.select();
    }
  }, {
    key: '_formatSelectionValue',
    value: function _formatSelectionValue(selection) {
      var selectionValue = '';
      if (selection) {
        selectionValue = selection.code + ' ' + selection.description;
      }
      return selectionValue;
    }
  }, {
    key: '_setSelectedItem',
    value: function _setSelectedItem(data) {
      this.selectedItem = data;

      if (this.onchange) {
        this.onchange({ selected: this.selectedItem });
      }
    }
  }], null, _instanceInitializers);

  var _AutoCompleteWidget = AutoCompleteWidget;
  AutoCompleteWidget = (0, _aureliaTemplating.bindable)({
    name: 'grabFocus',
    attribute: 'grab-focus',
    defaultValue: false
  })(AutoCompleteWidget) || AutoCompleteWidget;
  AutoCompleteWidget = (0, _aureliaTemplating.bindable)({
    name: 'autoSelectFirstResult',
    attribute: 'auto-select-first',
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime,
    defaultValue: true
  })(AutoCompleteWidget) || AutoCompleteWidget;
  AutoCompleteWidget = (0, _aureliaTemplating.bindable)('onenterpressed')(AutoCompleteWidget) || AutoCompleteWidget;
  AutoCompleteWidget = (0, _aureliaTemplating.bindable)('title')(AutoCompleteWidget) || AutoCompleteWidget;
  AutoCompleteWidget = (0, _aureliaTemplating.bindable)({
    name: 'customCSS',
    attribute: 'custom-css',
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime,
    defaultValue: ''
  })(AutoCompleteWidget) || AutoCompleteWidget;
  AutoCompleteWidget = (0, _aureliaTemplating.bindable)({
    name: 'placeholder',
    attribute: 'placeholder',
    defaultValue: '',
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  })(AutoCompleteWidget) || AutoCompleteWidget;
  AutoCompleteWidget = (0, _aureliaTemplating.bindable)({
    name: 'selectedItem',
    attribute: 'selected-item',
    defaultBindingMode: _aureliaBinding.bindingMode.twoWay
  })(AutoCompleteWidget) || AutoCompleteWidget;
  AutoCompleteWidget = (0, _aureliaTemplating.bindable)({
    name: 'controller',
    attribute: 'controller',
    defaultBindingMode: _aureliaBinding.bindingMode.twoWay
  })(AutoCompleteWidget) || AutoCompleteWidget;
  AutoCompleteWidget = (0, _aureliaTemplating.bindable)({
    name: 'disabled',
    attribute: 'disabled',
    defaultValue: false,
    defaultBindingMode: _aureliaBinding.bindingMode.oneWay
  })(AutoCompleteWidget) || AutoCompleteWidget;
  AutoCompleteWidget = (0, _aureliaTemplating.bindable)({
    name: 'size',
    attribute: 'size',
    defaultValue: 'medium',
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  })(AutoCompleteWidget) || AutoCompleteWidget;
  AutoCompleteWidget = (0, _aureliaTemplating.customElement)('autocomplete-widget')(AutoCompleteWidget) || AutoCompleteWidget;
  AutoCompleteWidget = (0, _aureliaDependencyInjection.inject)(Element)(AutoCompleteWidget) || AutoCompleteWidget;
  return AutoCompleteWidget;
})();

exports.AutoCompleteWidget = AutoCompleteWidget;