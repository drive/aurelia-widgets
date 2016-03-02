define(['exports', 'babel-runtime/helpers/define-decorated-property-descriptor', 'babel-runtime/helpers/create-decorated-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/helpers/to-consumable-array', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'jquery', 'babel-runtime/helpers/interop-require-default', 'devbridge-autocomplete'], function (exports, _babelRuntimeHelpersDefineDecoratedPropertyDescriptor, _babelRuntimeHelpersCreateDecoratedClass, _babelRuntimeHelpersClassCallCheck, _babelRuntimeHelpersToConsumableArray, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _jquery, _babelRuntimeHelpersInteropRequireDefault, _devbridgeAutocomplete) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _$ = (0, _babelRuntimeHelpersInteropRequireDefault['default'])(_jquery);

  var AutoCompleteWidget = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};
    (0, _babelRuntimeHelpersCreateDecoratedClass['default'])(AutoCompleteWidget, [{
      key: 'onchange',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    function AutoCompleteWidget(element) {
      (0, _babelRuntimeHelpersClassCallCheck['default'])(this, _AutoCompleteWidget);
      (0, _babelRuntimeHelpersDefineDecoratedPropertyDescriptor['default'])(this, 'onchange', _instanceInitializers);

      this.element = element;
      this.showingSuggestions = false;
    }

    (0, _babelRuntimeHelpersCreateDecoratedClass['default'])(AutoCompleteWidget, [{
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
        this.input.value = this._formatSelectionValue(this.selectedItem);

        (0, _$['default'])(this.input).autocomplete({
          lookup: this.lookup.bind(this),
          onSelect: this.onSelect.bind(this),
          onInvalidateSelection: this.onInvalidateSelection.bind(this),
          beforeRender: this.suggestionsShown.bind(this),
          onHide: this.suggestionsHidden.bind(this),
          deferRequestBy: 200,
          autoSelectFirst: this.autoSelectFirstResult
        });
        (0, _$['default'])(this.input).data('autocomplete').selection = this.selectedItem;
      }
    }, {
      key: 'selectedItemChanged',
      value: function selectedItemChanged(newValue) {
        var currentControlSelection = (0, _$['default'])(this.input).data('autocomplete').selection;

        if (currentControlSelection === null && newValue === null) {
          return;
        }

        this.input.value = this._formatSelectionValue(newValue);
        (0, _$['default'])(this.input).data('autocomplete').selection = newValue;
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

        if (this.customCSS !== '') (_$$0$classList = (0, _$['default'])(container)[0].classList).add.apply(_$$0$classList, (0, _babelRuntimeHelpersToConsumableArray['default'])(this.customCSS.split(',')));
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
});