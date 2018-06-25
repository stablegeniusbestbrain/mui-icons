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
      _react2.default.createElement('path', { d: 'M22.5 13.5L20.8 2.8c-.1-.7-.7-1.3-1.5-1.3H4.7c-.8 0-1.4.6-1.5 1.3L1.5 13.5V21c0 .8.7 1.5 1.5 1.5h18c.8 0 1.5-.7 1.5-1.5v-7.5zm-4.9.8l-.7 1.4c-.2.5-.8.8-1.3.8H8.4c-.6 0-1.1-.3-1.3-.8l-.7-1.4c-.2-.5-.8-.8-1.3-.8H3L4.5 3h15L21 13.5h-2.1c-.6 0-1.1.3-1.3.8z' })
    )
  );
};

exports.default = Icon;