"use strict";

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var HttpClient = require("aurelia-http-client").HttpClient;

/**
* Abstract class for lookup widget
* Extend this class with your implementation that consumes your search API
*
* @class LookupAbstract
* @constructor HttpClient
*/

var LookupAbstract = exports.LookupAbstract = (function () {
    function LookupAbstract(http) {
        _classCallCheck(this, LookupAbstract);

        this.http = http;
    }

    _createClass(LookupAbstract, {
        setDefaultSelection: {
            value: function setDefaultSelection() {
                return { id: this.value, text: this.value };
            }
        },
        search: {
            value: function search(item) {
                //Override this class with your API to execute the query
                return new Promise(function (resolve) {
                    resolve({ items: [{ id: 1234, text: "Test" }] });
                });
            }
        },
        formatItem: {
            value: function formatItem(item) {
                return "<div class=\"select2-user-result\"><strong>" + item.id + "</strong> " + item.text + "</div>";
            }
        },
        formatSelection: {
            value: function formatSelection(item) {
                return item.id;
            }
        }
    }, {
        inject: {
            value: function inject() {
                return [HttpClient];
            }
        }
    });

    return LookupAbstract;
})();

/**
* Client for lookup widget
*
* @class ClientLookup
* @constructor HttpClient
*/

var ClientLookup = exports.ClientLookup = (function (_LookupAbstract) {
    function ClientLookup(http) {
        _classCallCheck(this, ClientLookup);

        _get(Object.getPrototypeOf(ClientLookup.prototype), "constructor", this).call(this, http);
    }

    _inherits(ClientLookup, _LookupAbstract);

    _createClass(ClientLookup, {
        search: {
            value: function search(item) {
                //TODO: Add Real API
                return new Promise(function (resolve) {
                    resolve({ items: [{ id: "CLIENT", text: "Test" }] });
                });
            }
        }
    }, {
        inject: {
            value: function inject() {
                return [HttpClient];
            }
        }
    });

    return ClientLookup;
})(LookupAbstract);

/**
* Receiveable Account for lookup widget
*
* @class ClientLookup
* @constructor HttpClient
*/

var ReceivableAccountLookup = exports.ReceivableAccountLookup = (function (_LookupAbstract2) {
    function ReceivableAccountLookup(http) {
        _classCallCheck(this, ReceivableAccountLookup);

        _get(Object.getPrototypeOf(ReceivableAccountLookup.prototype), "constructor", this).call(this, http);
    }

    _inherits(ReceivableAccountLookup, _LookupAbstract2);

    _createClass(ReceivableAccountLookup, {
        search: {
            value: function search(item) {
                //TODO: Add Real API
                return new Promise(function (resolve) {
                    resolve({ items: [{ id: 1234, text: "RA12323" }] });
                });
            }
        }
    }, {
        inject: {
            value: function inject() {
                return [HttpClient];
            }
        }
    });

    return ReceivableAccountLookup;
})(LookupAbstract);