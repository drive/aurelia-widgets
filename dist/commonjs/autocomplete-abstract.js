'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
  value: true
});

var AutoCompleteAbstract = (function () {
  function AutoCompleteAbstract() {
    _classCallCheck(this, AutoCompleteAbstract);
  }

  _createClass(AutoCompleteAbstract, [{
    key: 'search',
    value: function search(item) {
      return new Promise(function (resolve) {
        resolve({ suggestions: [{ value: 'Code and Description', data: '01234' }] });
      });
    }
  }]);

  return AutoCompleteAbstract;
})();

exports.AutoCompleteAbstract = AutoCompleteAbstract;