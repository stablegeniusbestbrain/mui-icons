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
      _react2.default.createElement('path', { d: 'M4 6h2v12H4V6zm3 0h1v12H7V6zm2 0h3v12H9V6zm4 0h1v12h-1V6zm3 0h2v12h-2V6zm3 0h1v12h-1V6zM2 4v4H0V4c0-1.1.9-2 2-2h4v2H2zm20-2c1.1 0 2 .9 2 2v4h-2V4h-4V2h4zM2 16v4h4v2H2c-1.1 0-2-.9-2-2v-4h2zm20 4v-4h2v4c0 1.1-.9 2-2 2h-4v-2h4z' })
    )
  );
};

exports.default = Icon;