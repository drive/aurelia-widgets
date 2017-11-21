'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = undefined;

var _dec, _dec2, _class;

var _aureliaFramework = require('aurelia-framework');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TOOLTIP_PLACEMENT = 'top';

var Tooltip = exports.Tooltip = (_dec = (0, _aureliaFramework.customAttribute)('tooltip'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec(_class = _dec2(_class = function () {
  function Tooltip(element) {
    _classCallCheck(this, Tooltip);

    this.element = element;
  }

  Tooltip.prototype.bind = function bind() {
    if (this.value) {
      this._createTooltip(this.value);
    }
  };

  Tooltip.prototype.unbind = function unbind() {
    this._destroyToolTip();
  };

  Tooltip.prototype.valueChanged = function valueChanged(newValue, oldValue) {
    if (newValue) {
      this._updateToolTip(newValue);
    } else {
      this._destroyToolTip();
    }
  };

  Tooltip.prototype._updateToolTip = function _updateToolTip(newValue) {
    if (!this.toolTipElement) this._createTooltip(newValue);else this.toolTipElement.attr('data-original-title', newValue);
  };

  Tooltip.prototype._createTooltip = function _createTooltip(value) {
    this.toolTipElement = (0, _jquery2.default)(this.element);
    this.toolTipElement.attr('title', '');
    this.toolTipElement.tooltip({
      container: 'body',
      placement: TOOLTIP_PLACEMENT,
      html: true,
      title: this.value || ''
    });
  };

  Tooltip.prototype._destroyToolTip = function _destroyToolTip() {
    if (this.toolTipElement) {
      this.toolTipElement.tooltip('dispose');
      this.toolTipElement = null;
    }
  };

  return Tooltip;
}()) || _class) || _class);