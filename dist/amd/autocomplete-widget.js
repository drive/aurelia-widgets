define(['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'jquery', 'devbridge/jQuery-Autocomplete'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _jquery, _devbridgeJQueryAutocomplete) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _$ = _interopRequireDefault(_jquery);

  var _autocomplete = _interopRequireDefault(_devbridgeJQueryAutocomplete);

  var AutoCompleteWidget = (function () {
    function AutoCompleteWidget(element) {
      var _this = this;

      _classCallCheck(this, _AutoCompleteWidget);

      this.element = element;
      this._keyUpListener = (function (event) {
        if (_this.input.value.trim() === '') {
          _this._setSelectedItem(null, '');
        } else if (event.which === 13 && !_this.showingSuggestions) {
          if (_this.onenterpressed) {
            _this.onenterpressed();
          }
        }
      }).bind(this);

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
        this.input.removeEventListener('keyup', this._keyUpListener);
      }
    }, {
      key: 'attached',
      value: function attached() {
        if (this.grabFocus) {
          this.input.focus();
        }
      }
    }, {
      key: 'apply',
      value: function apply() {
        (0, _$['default'])(this.input).autocomplete({
          lookup: this.lookup.bind(this),
          onSelect: this.onSelect.bind(this),
          beforeRender: this.suggestionsShown.bind(this),
          onHide: this.suggestionsHidden.bind(this)
        });
        this.input.addEventListener('keyup', this._keyUpListener);
      }
    }, {
      key: 'suggestionsShown',
      value: function suggestionsShown(container) {
        this.showingSuggestions = true;
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
        this._setSelectedItem(suggestion.data, suggestion.value);
      }
    }, {
      key: '_setSelectedItem',
      value: function _setSelectedItem(data, value) {
        this.selectedItem = data;
      }
    }, {
      key: 'bindableText',
      decorators: [(0, _aureliaBinding.computedFrom)('selectedItem.code', 'selectedItem.description')],
      get: function get() {
        if (this.selectedItem) {
          return this.selectedItem.code + ' ' + this.selectedItem.description;
        }
      }
    }]);

    var _AutoCompleteWidget = AutoCompleteWidget;
    AutoCompleteWidget = (0, _aureliaTemplating.bindable)({
      name: 'grabFocus',
      attribute: 'grab-focus',
      defaultValue: false
    })(AutoCompleteWidget) || AutoCompleteWidget;
    AutoCompleteWidget = (0, _aureliaTemplating.bindable)('onenterpressed')(AutoCompleteWidget) || AutoCompleteWidget;
    AutoCompleteWidget = (0, _aureliaTemplating.bindable)('title')(AutoCompleteWidget) || AutoCompleteWidget;
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
    AutoCompleteWidget = (0, _aureliaTemplating.customElement)('autocomplete-widget')(AutoCompleteWidget) || AutoCompleteWidget;
    AutoCompleteWidget = (0, _aureliaDependencyInjection.inject)(Element)(AutoCompleteWidget) || AutoCompleteWidget;
    return AutoCompleteWidget;
  })();

  exports.AutoCompleteWidget = AutoCompleteWidget;
});