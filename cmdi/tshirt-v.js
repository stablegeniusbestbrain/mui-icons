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
      _react2.default.createElement('path', { d: 'M16 21H8c-.6 0-1-.4-1-1v-7.9l-1.3 1c-.4.4-1 .4-1.4 0l-2.8-2.8c-.4-.4-.4-1 0-1.4L7.3 3H9c0 1.1 1 3 3 4.3C14 6 15 4.1 15 3h1.7l5.8 5.9c.4.4.4 1 0 1.4l-2.8 2.8c-.4.4-1 .4-1.4 0l-1.3-1V20c0 .6-.4 1-1 1zm4.4-11.4l-4.3-4.3C15 7 14 8.3 12 9.3c-2-1-3-2.3-4.1-4L3.6 9.6 5 11l3-2h1v10h6V9h1l3 2 1.4-1.4z' })
    )
  );
};

exports.default = Icon;