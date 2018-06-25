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
      _react2.default.createElement('path', { d: 'M10 3H8c0 .4 0 .7-.1 1.1l1.6 1.6c.3-.9.5-1.8.5-2.7zM3 4.3l2.8 2.8C5 7.7 4.1 8 3 8v2c1.6 0 3.1-.6 4.3-1.5L8.7 10c-1.6 1.2-3.5 2-5.7 2v2c2.7 0 5.2-1 7.1-2.6l2.5 2.5C11 15.8 10 18.3 10 21h2c0-2.2.8-4.1 2-5.7l1.5 1.4c-.9 1.2-1.5 2.7-1.5 4.3h2c0-1.1.3-2 .9-2.8l2.8 2.8 1.3-1.3L4.3 3 3 4.3zM14 3h-2c0 1.5-.4 2.9-1 4.2l1.4 1.4C13.4 7 14 5.1 14 3zm5.9 13.1c.4-.1.7-.1 1.1-.1v-2c-.9 0-1.8.2-2.7.5l1.6 1.6zm-4.5-4.5l1.4 1.4c1.3-.6 2.7-1 4.2-1v-2c-2.1 0-4 .6-5.6 1.6z' })
    )
  );
};

exports.default = Icon;