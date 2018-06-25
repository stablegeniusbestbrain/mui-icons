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
      _react2.default.createElement('path', { d: 'M19.5 5h-10c-1.3 0-2.8.8-3.6 1.8l-2.6 3.7-1.2 1.7c-.1.1-.1.5 0 .6l1.2 1.7 2.6 3.7c.8 1 2.3 1.8 3.6 1.8h10c1.4 0 2.5-1.1 2.5-2.5v-10C22 6.1 20.9 5 19.5 5zm-2.3 9.8c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3s-.5-.1-.7-.3l-2.3-2.3-2.3 2.3c-.2.2-.4.3-.7.3s-.5-.1-.7-.3c-.4-.4-.4-1 0-1.4l2.3-2.3-2.3-2.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.3 2.3 2.3-2.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-2.3 2.3 2.3 2.3z' })
    )
  );
};

exports.default = Icon;