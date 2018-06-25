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
      _react2.default.createElement('path', { d: 'M9 12c.5.1.8.7.7 1.2l-1.3 4.9c-.1.5-.7.8-1.2.7-.5-.2-.9-.7-.7-1.3l1.3-4.8c.1-.5.7-.8 1.2-.7zm4 0c.5.1.8.7.7 1.2L11.6 21c-.1.5-.7.8-1.2.7-.5-.2-.8-.7-.7-1.3l2.1-7.7c.1-.5.7-.8 1.2-.7zm4 0c.5.1.9.7.7 1.2l-1.3 4.9c-.1.5-.7.8-1.2.7-.5-.2-.9-.7-.7-1.3l1.3-4.8c.1-.5.7-.8 1.2-.7zm0-2V9c0-2.8-2.2-5-5-5-2.5 0-4.5 1.8-4.9 4.2C6.7 8.1 6.4 8 6 8c-1.7 0-3 1.3-3 3 0 1.1.6 2.1 1.5 2.6.5.3.6.9.4 1.4-.3.4-.9.6-1.4.3C2 14.5 1 12.8 1 11c0-2.8 2.2-5 5-5 1-2.4 3.3-4 6-4 3.4 0 6.2 2.7 6.5 6h.5c2.2 0 4 1.8 4 4 0 1.5-.8 2.8-2 3.5-.5.2-1.1.1-1.4-.4s-.1-1.1.4-1.4c.6-.3 1-1 1-1.7 0-1.1-.9-2-2-2h-2z' })
    )
  );
};

exports.default = Icon;