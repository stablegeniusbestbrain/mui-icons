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
      _react2.default.createElement('path', { d: 'M2 5.3L3.3 4 20 20.7 18.7 22 16 19.3c-.1 2-1.9 3.7-4 3.7-2.2 0-4-1.8-4-4v-1H7l-.8-8.2c-.4-.3-.7-.7-.9-1.2L2 5.3zM9 3c2.2 0 4 1.8 4 4H8.8L6.1 4.3C6.8 3.5 7.8 3 9 3zm2.8 6.8v.2l-2-2h3.1c-.2.7-.6 1.3-1.1 1.8zM11 18h-1v1c0 1.1.9 2 2 2s2-.9 2-2v-1.7l-2.7-2.7L11 18zm7-8h2l-1 1 1 1h-2c-1.1 0-2 .9-2 2v.2l-1.7-1.7c.6-1.5 2-2.5 3.7-2.5zM8 12c0 .6.4 1 1 1 .2 0 .4-.1.6-.2l-1.4-1.4c-.1.2-.2.4-.2.6z' })
    )
  );
};

exports.default = Icon;