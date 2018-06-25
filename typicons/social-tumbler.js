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
      _react2.default.createElement('path', { d: 'M15.5 17.9v-2c-.6.4-1.3.6-1.9.6-.3 0-.7-.1-1-.3-.3-.1-.4-.3-.4-.5-.1-.2-.2-.7-.2-1.4V11h3V9h-3V5.6h-1.8c-.1.8-.3 1.4-.4 1.7-.2.4-.5.8-.9 1.1-.4.4-.8.6-1.3.8V11H9v4.5c0 .5.1 1 .2 1.4.1.3.4.6.7.9.3.2.6.4 1.1.6.6.2 1.1.2 1.6.2s1 0 1.4-.1c.5-.1 1-.3 1.5-.6' })
    )
  );
};

exports.default = Icon;