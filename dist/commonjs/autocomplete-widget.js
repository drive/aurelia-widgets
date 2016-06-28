'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoCompleteWidget = undefined;

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _desc, _value, _class2, _descriptor;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaBinding = require('aurelia-binding');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('devbridge-autocomplete');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var AutoCompleteWidget = exports.AutoCompleteWidget = (_dec = (0, _aureliaDependencyInjection.inject)(Element), _dec2 = (0, _aureliaTemplating.customElement)('autocomplete-widget'), _dec3 = (0, _aureliaTemplating.bindable)({
  name: 'size',
  attribute: 'size',
  defaultValue: 'medium',
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec4 = (0, _aureliaTemplating.bindable)({
  name: 'disabled',
  attribute: 'disabled',
  defaultValue: false,
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec5 = (0, _aureliaTemplating.bindable)({
  name: 'controller',
  attribute: 'controller',
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec6 = (0, _aureliaTemplating.bindable)({
  name: 'selectedItem',
  attribute: 'selected-item',
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec7 = (0, _aureliaTemplating.bindable)({
  name: 'placeholder',
  attribute: 'placeholder',
  defaultValue: '',
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec8 = (0, _aureliaTemplating.bindable)({
  name: 'customCSS',
  attribute: 'custom-css',
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime,
  defaultValue: ''
}), _dec9 = (0, _aureliaTemplating.bindable)('title'), _dec10 = (0, _aureliaTemplating.bindable)('onenterpressed'), _dec11 = (0, _aureliaTemplating.bindable)({
  name: 'autoSelectFirstResult',
  attribute: 'auto-select-first',
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime,
  defaultValue: true
}), _dec12 = (0, _aureliaTemplating.bindable)({
  name: 'grabFocus',
  attribute: 'grab-focus',
  defaultValue: false
}), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = _dec9(_class = _dec10(_class = _dec11(_class = _dec12(_class = (_class2 = function () {
  function AutoCompleteWidget(element) {
    _classCallCheck(this, AutoCompleteWidget);

    _initDefineProp(this, 'onchange', _descriptor, this);

    this.element = element;
    this.showingSuggestions = false;
  }

  AutoCompleteWidget.prototype.bind = function bind() {
    this.input = this.element.querySelector('input');
    this.apply();
  };

  AutoCompleteWidget.prototype.unbind = function unbind() {
    (0, _jquery2.default)(this.input).autocomplete('dispose');
  };

  AutoCompleteWidget.prototype.apply = function apply() {
    this.input.value = this._formatSelectionValue(this.selectedItem);

    (0, _jquery2.default)(this.input).autocomplete({
      lookup: this.lookup.bind(this),
      onSelect: this.onSelect.bind(this),
      onInvalidateSelection: this.onInvalidateSelection.bind(this),
      beforeRender: this.suggestionsShown.bind(this),
      onHide: this.suggestionsHidden.bind(this),
      deferRequestBy: 200,
      autoSelectFirst: this.autoSelectFirstResult
    });
    (0, _jquery2.default)(this.input).data('autocomplete').selection = this.selectedItem;
  };

  AutoCompleteWidget.prototype.selectedItemChanged = function selectedItemChanged(newValue) {
    var currentControlSelection = (0, _jquery2.default)(this.input).data('autocomplete').selection;

    if (currentControlSelection == null && newValue == null || currentControlSelection != null && currentControlSelection.hasOwnProperty('data') && currentControlSelection.data === newValue) {
      return;
    }

    if (newValue == null) {
      this.input.value = '';
      (0, _jquery2.default)(this.input).data('autocomplete').selection = null;
    } else {
      (0, _jquery2.default)(this.input).data('autocomplete').suggestions = [this.controller.createSuggestion(newValue)];
      (0, _jquery2.default)(this.input).data('autocomplete').onSelect(0);
    }
  };

  AutoCompleteWidget.prototype.lookup = function lookup(query, done) {
    if (query == this._formatSelectionValue(this.selectedItem)) {
      done({
        suggestions: [this.controller.createSuggestion(this.selectedItem)]
      });
    } else {
      this.controller.search(query).then(function (results) {
        done(results);
      });
    }
  };

  AutoCompleteWidget.prototype.onSelect = function onSelect(suggestion) {
    this._setSelectedItem(suggestion.data);
  };

  AutoCompleteWidget.prototype.onInvalidateSelection = function onInvalidateSelection(param) {
    this._setSelectedItem(null);
  };

  AutoCompleteWidget.prototype.suggestionsShown = function suggestionsShown(container) {
    var _$$0$classList;

    this.showingSuggestions = true;

    if (this.customCSS !== '') (_$$0$classList = (0, _jquery2.default)(container)[0].classList).add.apply(_$$0$classList, this.customCSS.split(','));
  };

  AutoCompleteWidget.prototype.suggestionsHidden = function suggestionsHidden(container) {
    var _this = this;

    setTimeout(function () {
      _this.showingSuggestions = false;
    }, 250);
  };

  AutoCompleteWidget.prototype.keyUpListener = function keyUpListener(event) {
    if (event.which === 13 && !this.showingSuggestions) {
      if (this.onenterpressed) {
        this.onenterpressed();
        event.preventDefault();
      }
    }
  };

  AutoCompleteWidget.prototype.selectAll = function selectAll() {
    this.input.select();
  };

  AutoCompleteWidget.prototype.blurListener = function blurListener() {
    if (this.selectedItem == null) {
      this.input.value = '';
    }
  };

  AutoCompleteWidget.prototype._formatSelectionValue = function _formatSelectionValue(selection) {
    var selectionValue = '';
    if (selection) {
      selectionValue = selection.hasOwnProperty("toString") && typeof selection.toString === "function" ? selection.toString() : selection.code + ' ' + selection.description;
    }
    return selectionValue;
  };

  AutoCompleteWidget.prototype._setSelectedItem = function _setSelectedItem(data) {
    if (this.selectedItem === data) {
      return;
    }

    this.selectedItem = data;
    if (this.onchange) {
      this.onchange({ selected: this.selectedItem });
    }
  };

  return AutoCompleteWidget;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'onchange', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);