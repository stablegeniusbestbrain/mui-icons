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
      _react2.default.createElement('path', { d: 'M20.8 16.3c.7.5 1.2 1.3 1.2 2.2 0 1.4-1.1 2.5-2.5 2.5h-15C3.1 21 2 19.9 2 18.5c0-.9.5-1.7 1.2-2.2l7.8-4.4s0-.9 1-1.9c1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2H8c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.9-1.3 3.4-3 3.9l7.8 4.4zM4.5 19h15c.2 0 .3-.1.4-.2.2-.3.1-.6-.1-.7L12 13.6l-7.7 4.5c-.3.1-.4.4-.2.7.1.1.2.2.4.2zm6.5-7.1l1-1.9c1.1 0 2-.9 2-2m-3 3.9l1-1.9c1.1 0 2-.9 2-2' })
    )
  );
};

exports.default = Icon;