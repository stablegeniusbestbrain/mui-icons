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
      _react2.default.createElement('path', { d: 'M21 21c-.1 1-1.9 1.5-3 1.5H8.5L6 21v-9c2 0 3.2-1.1 4.7-2.8C12.5 7.1 12.4 5.3 12 3c-.1-.8.8-1.5 1.5-1.5 1.3 0 3 4.1 3 6V9c0 1.1.5 1.5 1.5 1.5h3c1 0 1.5.5 1.5 1.5L21 21zm0-12h-3V7.5C18 5.6 16.2 0 13.5 0c-.9 0-1.8.4-2.3 1.2-.6.6-.8 1.3-.7 2.1.4 2.2.4 3.4-.9 4.9-1.5 1.6-2.2 2.3-3.6 2.3H3c-1.6 0-3 1.4-3 3v6c0 1.6 1.4 3 3 3h2.6l2.1 1.3c.3.1.5.2.8.2H18c1.7 0 4.3-.7 4.5-2.8l1.5-8.9V12c0-1.8-1.2-3-3-3z' })
    )
  );
};

exports.default = Icon;