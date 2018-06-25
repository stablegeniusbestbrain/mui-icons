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
      _react2.default.createElement('path', { d: 'M4 4h6v6H4V4zm16 0v6h-6V4h6zm-6 11h2v-2h-2v-2h2v2h2v-2h2v2h-2v2h2v3h-2v2h-2v-2h-3v2h-2v-4h3v-1zm2 0v3h2v-3h-2zM4 20v-6h6v6H4zM6 6v2h2V6H6zm10 0v2h2V6h-2zM6 16v2h2v-2H6zm-2-5h2v2H4v-2zm5 0h4v4h-2v-2H9v-2zm2-5h2v4h-2V6zM2 2v4H0V2C0 .9.9 0 2 0h4v2H2zm20-2c1.1 0 2 .9 2 2v4h-2V2h-4V0h4zM2 18v4h4v2H2c-1.1 0-2-.9-2-2v-4h2zm20 4v-4h2v4c0 1.1-.9 2-2 2h-4v-2h4z' })
    )
  );
};

exports.default = Icon;