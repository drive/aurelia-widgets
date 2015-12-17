define(['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'jquery', 'devbridge/jQuery-Autocomplete'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _jquery, _devbridgeJQueryAutocomplete) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var _$ = _interopRequireDefault(_jquery);

  var _autocomplete = _interopRequireDefault(_devbridgeJQueryAutocomplete);

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
        (0, _$['default'])(this.input).autocomplete('dispose');
      }
    }, {
      key: 'apply',
      value: function apply() {
        (0, _$['default'])(this.input).autocomplete({
          lookup: this.lookup.bind(this),
          onSelect: this.onSelect.bind(this),
          beforeRender: this.suggestionsShown.bind(this),
          onHide: this.suggestionsHidden.bind(this),
          deferRequestBy: 200
        });
      }
    }, {
      key: 'suggestionsShown',
      value: function suggestionsShown(container) {
        this.showingSuggestions = true;

        if (this.customCSS !== '') (0, _$['default'])(container)[0].classList.add(this.customCSS);
      }
    }, {
      key: 'suggestionsHidden',
      value: function suggestionsHidden(container) {
        this.showingSuggestions = false;
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

        if (this.onchange) {
          this.onchange(this.selectedItem);
        }
      }
    }, {
      key: 'keyUpListener',
      value: function keyUpListener(event) {
        if (this.input.value.trim() === '') {
          this._setSelectedItem(null, '');
        } else if (event.which === 13 && !this.showingSuggestions) {
          if (this.onenterpressed) {
            this.onenterpressed();
            event.preventDefault();
          }
        }
      }
    }, {
      key: '_setSelectedItem',
      value: function _setSelectedItem(data) {
        this.selectedItem = data;
      }
    }, {
      key: 'selectAll',
      value: function selectAll() {
        this.input.select();
      }
    }, {
      key: 'bindableText',
      decorators: [(0, _aureliaBinding.computedFrom)('selectedItem')],
      get: function get() {
        if (this.selectedItem) {
          return this.selectedItem.code + ' ' + this.selectedItem.description;
        }
      }
    }], null, _instanceInitializers);

    var _AutoCompleteWidget = AutoCompleteWidget;
    AutoCompleteWidget = (0, _aureliaTemplating.bindable)({
      name: 'grabFocus',
      attribute: 'grab-focus',
      defaultValue: false
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

  var CoalesceStringValueConverter = (function () {
    function CoalesceStringValueConverter() {
      _classCallCheck(this, CoalesceStringValueConverter);
    }

    _createClass(CoalesceStringValueConverter, [{
      key: 'toView',
      value: function toView(value) {
        var replacement = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

        return value === null || value === undefined ? replacement : value.toString();
      }
    }]);

    return CoalesceStringValueConverter;
  })();

  exports.CoalesceStringValueConverter = CoalesceStringValueConverter;
});