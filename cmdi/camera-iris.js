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
      _react2.default.createElement('path', { d: 'M13.7 15l-3.9 6.8c.7.1 1.5.2 2.2.2 2.4 0 4.6-.8 6.3-2.3l-3.6-6.3M2.5 15c.9 2.9 3.1 5.3 6 6.3l3.6-6.3m-3.6-3L4.6 5.2C3 7 2 9.4 2 12c0 .7.1 1.4.2 2h7.5m12.1-4h-7.5l.3.5 4.8 8.2C21 17 22 14.6 22 12c0-.7-.1-1.4-.2-2zm-.3-1c-.9-2.9-3.1-5.3-6-6.3L11.9 9m-2.5 1.5l4.8-8.3c-.7-.1-1.5-.2-2.2-.2-2.4 0-4.6.8-6.3 2.3l3.6 6.3.1-.1z' })
    )
  );
};

exports.default = Icon;