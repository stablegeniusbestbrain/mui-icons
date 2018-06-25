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
      _react2.default.createElement('path', { d: 'M20 18H4V6h16m0-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-9 13h2v-1h1c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h3v1H9v2h2v1z' })
    )
  );
};

exports.default = Icon;