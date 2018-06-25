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
      _react2.default.createElement('path', { d: 'M17 12h3c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2h-3c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2zm0 2v3h3v-3h-3zM2 7h5c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2 1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H2V7zm2 2v3h3V9H4zm0 8h3v-3H4v3zm7-4h2v6h-2v-6zm0-4h2v2h-2V9z' })
    )
  );
};

exports.default = Icon;