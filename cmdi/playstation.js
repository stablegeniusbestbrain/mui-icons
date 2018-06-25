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
      _react2.default.createElement('path', { d: 'M9.5 4.3c1.4.2 3.4.8 4.5 1.2 2.8 1 3.7 2.1 3.7 4.8 0 2.6-1.6 3.6-3.6 2.6V8.1c0-.6-.2-1.1-.7-1.3-.4-.1-.6.3-.6.8v12.1l-3.3-1V4.3zm3.9 13.3l5.2-1.9c.6-.2.7-.5.2-.6-.5-.2-1.3-.1-1.9.1l-3.5 1.2v-2h.2s1-.4 2.4-.5c1.4-.2 3.2 0 4.5.5 1.6.5 1.7 1.2 1.4 1.7-.4.5-1.4.8-1.4.8l-7.1 2.6v-1.9zm-9.9-.2c-1.6-.4-1.8-1.3-1.1-1.9.7-.5 1.8-.8 1.8-.8L8.9 13v1.9l-3.4 1.2c-.6.2-.7.5-.2.7.5.1 1.3.1 1.9-.1l1.7-.6v1.7h-.4c-1.6.3-3.3.2-5-.4z' })
    )
  );
};

exports.default = Icon;