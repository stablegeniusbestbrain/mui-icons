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
      _react2.default.createElement('path', { d: 'M11.5 1c-.8 0-1.5.7-1.5 1.5v12c-.6.5-1 1.2-1 2 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-.8-.4-1.5-1-2V13h4v-2h-4V9h4V7h-4V5h4V3h-4v-.5c0-.8-.7-1.5-1.5-1.5zM0 15v2c.7 0 .8.2 1.3.7.5.5 1.4 1.3 2.7 1.3 1.3 0 2.2-.8 2.7-1.3l.3-.3v-2.2c-.8.2-1.3.7-1.7 1.1-.5.5-.6.7-1.3.7-.7 0-.8-.2-1.3-.7C2.2 15.8 1.3 15 0 15zm16 0v2c.7 0 .8.2 1.3.7.5.5 1.4 1.3 2.7 1.3 1.3 0 2.2-.8 2.7-1.3s.6-.7 1.3-.7v-2c-1.3 0-2.2.8-2.7 1.3s-.6.7-1.3.7c-.7 0-.8-.2-1.3-.7-.5-.5-1.4-1.3-2.7-1.3zm-8 5c-1.3 0-2.2.8-2.7 1.3s-.6.7-1.3.7c-.7 0-.8-.2-1.3-.7-.4-.4-.9-.9-1.7-1.1v2.2l.3.3c.5.5 1.4 1.3 2.7 1.3 1.3 0 2.2-.8 2.7-1.3S7.3 22 8 22c.7 0 .8.2 1.3.7.4.4 1.1 1.1 2.2 1.3h.5c1.3 0 2.2-.8 2.7-1.3s.6-.7 1.3-.7c.7 0 .8.2 1.3.7.5.5 1.4 1.3 2.7 1.3 1.3 0 2.2-.8 2.7-1.3l.3-.3v-2.2c-.8.2-1.3.7-1.7 1.1-.5.5-.6.7-1.3.7-.7 0-.8-.2-1.3-.7-.5-.5-1.4-1.3-2.7-1.3-1.3 0-2.2.8-2.7 1.3s-.6.7-1.3.7c-.2 0-.4 0-.5-.1-.3-.1-.5-.3-.8-.6-.5-.5-1.4-1.3-2.7-1.3z' })
    )
  );
};

exports.default = Icon;