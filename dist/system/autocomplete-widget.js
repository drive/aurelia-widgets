System.register(['babel-runtime/helpers/define-decorated-property-descriptor', 'babel-runtime/helpers/create-decorated-class', 'babel-runtime/helpers/class-call-check', 'babel-runtime/helpers/to-consumable-array', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'jquery', 'devbridge-autocomplete'], function (_export) {
  var _defineDecoratedPropertyDescriptor, _createDecoratedClass, _classCallCheck, _toConsumableArray, customElement, bindable, bindingMode, computedFrom, inject, $, AutoCompleteWidget;

  return {
    setters: [function (_babelRuntimeHelpersDefineDecoratedPropertyDescriptor) {
      _defineDecoratedPropertyDescriptor = _babelRuntimeHelpersDefineDecoratedPropertyDescriptor['default'];
    }, function (_babelRuntimeHelpersCreateDecoratedClass) {
      _createDecoratedClass = _babelRuntimeHelpersCreateDecoratedClass['default'];
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _classCallCheck = _babelRuntimeHelpersClassCallCheck['default'];
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _toConsumableArray = _babelRuntimeHelpersToConsumableArray['default'];
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
      bindable = _aureliaTemplating.bindable;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
      computedFrom = _aureliaBinding.computedFrom;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_jquery) {
      $ = _jquery['default'];
    }, function (_devbridgeAutocomplete) {}],
    execute: function () {
      'use strict';

      AutoCompleteWidget = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(AutoCompleteWidget, [{
          key: 'onchange',
          decorators: [bindable],
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
            $(this.input).autocomplete('dispose');
          }
        }, {
          key: 'apply',
          value: function apply() {
            this.input.value = this._formatSelectionValue(this.selectedItem);

            $(this.input).autocomplete({
              lookup: this.lookup.bind(this),
              onSelect: this.onSelect.bind(this),
              onInvalidateSelection: this.onInvalidateSelection.bind(this),
              beforeRender: this.suggestionsShown.bind(this),
              onHide: this.suggestionsHidden.bind(this),
              deferRequestBy: 200,
              autoSelectFirst: this.autoSelectFirstResult
            });
            $(this.input).data('autocomplete').selection = this.selectedItem;
          }
        }, {
          key: 'selectedItemChanged',
          value: function selectedItemChanged(newValue) {
            var currentControlSelection = $(this.input).data('autocomplete').selection;

            if (currentControlSelection === null && newValue === null || currentControlSelection.data === newValue) {
              return;
            }

            this.input.value = this._formatSelectionValue(newValue);
            $(this.input).data('autocomplete').selection = newValue;
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

            if (this.customCSS !== '') (_$$0$classList = $(container)[0].classList).add.apply(_$$0$classList, _toConsumableArray(this.customCSS.split(',')));
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
        AutoCompleteWidget = bindable({
          name: 'grabFocus',
          attribute: 'grab-focus',
          defaultValue: false
        })(AutoCompleteWidget) || AutoCompleteWidget;
        AutoCompleteWidget = bindable({
          name: 'autoSelectFirstResult',
          attribute: 'auto-select-first',
          defaultBindingMode: bindingMode.oneTime,
          defaultValue: true
        })(AutoCompleteWidget) || AutoCompleteWidget;
        AutoCompleteWidget = bindable('onenterpressed')(AutoCompleteWidget) || AutoCompleteWidget;
        AutoCompleteWidget = bindable('title')(AutoCompleteWidget) || AutoCompleteWidget;
        AutoCompleteWidget = bindable({
          name: 'customCSS',
          attribute: 'custom-css',
          defaultBindingMode: bindingMode.oneTime,
          defaultValue: ''
        })(AutoCompleteWidget) || AutoCompleteWidget;
        AutoCompleteWidget = bindable({
          name: 'placeholder',
          attribute: 'placeholder',
          defaultValue: '',
          defaultBindingMode: bindingMode.oneTime
        })(AutoCompleteWidget) || AutoCompleteWidget;
        AutoCompleteWidget = bindable({
          name: 'selectedItem',
          attribute: 'selected-item',
          defaultBindingMode: bindingMode.twoWay
        })(AutoCompleteWidget) || AutoCompleteWidget;
        AutoCompleteWidget = bindable({
          name: 'controller',
          attribute: 'controller',
          defaultBindingMode: bindingMode.twoWay
        })(AutoCompleteWidget) || AutoCompleteWidget;
        AutoCompleteWidget = bindable({
          name: 'disabled',
          attribute: 'disabled',
          defaultValue: false,
          defaultBindingMode: bindingMode.oneWay
        })(AutoCompleteWidget) || AutoCompleteWidget;
        AutoCompleteWidget = bindable({
          name: 'size',
          attribute: 'size',
          defaultValue: 'medium',
          defaultBindingMode: bindingMode.oneTime
        })(AutoCompleteWidget) || AutoCompleteWidget;
        AutoCompleteWidget = customElement('autocomplete-widget')(AutoCompleteWidget) || AutoCompleteWidget;
        AutoCompleteWidget = inject(Element)(AutoCompleteWidget) || AutoCompleteWidget;
        return AutoCompleteWidget;
      })();

      _export('AutoCompleteWidget', AutoCompleteWidget);
    }
  };
});