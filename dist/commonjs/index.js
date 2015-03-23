"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _defaults = function (obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; };

exports.install = install;
Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lookupWidget = require("./lookup-widget");

_defaults(exports, _interopRequireWildcard(_lookupWidget));

_defaults(exports, _interopRequireWildcard(require("./lookup-models")));

var LookupWidget = _lookupWidget.LookupWidget;

function install(aurelia) {
	aurelia.withResources(LookupWidget);
}