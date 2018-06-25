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
      _react2.default.createElement('path', { d: 'M7 17H4c-1.6 0-3-1.3-3.2-2.9l-.5-3c-.2-.8.1-1.6.6-2.2C1.4 8.3 2.2 8 3 8h6c.8 0 1.6.3 2.1 1 .1.1.2.3.3.4h1.2c.1-.1.2-.3.3-.4.5-.7 1.3-1 2.1-1h6c.8 0 1.6.3 2.1.9.5.6.7 1.4.6 2.2l-.5 3.1C23 15.7 21.6 17 20 17h-3c-1.6 0-3.1-1.2-3.5-2.7l-.9-2.7c-.3-.3-.9-.3-1.2 0l-1 2.8C10.1 15.8 8.6 17 7 17z' })
    )
  );
};

exports.default = Icon;