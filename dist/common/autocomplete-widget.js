'use strict';

var _defineDecoratedPropertyDescriptor = require('babel-runtime/helpers/define-decorated-property-descriptor')['default'];

var _createDecoratedClass = require('babel-runtime/helpers/create-decorated-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _toConsumableArray = require('babel-runtime/helpers/to-consumable-array')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

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
      var currentControlSelection = (0, _jquery2['default'])(this.input).data('autocomplete').selection;

      if (currentControlSelection === null && newValue === null || currentControlSelection.data === newValue) {
        return;
      }

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
        selectionValue = selection.hasOwnProperty("toString") && typeof selection.toString === "function" ? selection.toString() : selection.code + ' ' + selection.description;
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