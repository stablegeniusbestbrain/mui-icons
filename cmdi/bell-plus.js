'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: 'M10 21c0 1.1.9 2 2 2s2-.9 2-2m4.9-4.2V11c0-3.2-2.3-6-5.3-6.7v-.7c0-.9-.7-1.6-1.6-1.6-.9 0-1.6.7-1.6 1.6v.7C7.4 5 5.1 7.8 5.1 11v5.8L3 18.9V20h18v-1.1M16 13h-3v3h-2v-3H8v-2h3V8h2v3h3' })
    )
  );
};

exports.default = Icon;