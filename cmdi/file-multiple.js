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
      _react2.default.createElement('path', { d: 'M15 7h5.5L15 1.5V7zM8 0h8l6 6v12c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2zM4 4v18h16v2H4c-1.1 0-2-.9-2-2V4h2z' })
    )
  );
};

exports.default = Icon;