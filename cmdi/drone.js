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
      _react2.default.createElement('path', { d: 'M22 11h-1l-1-2h-6.2l2.2 3.5h-2L10.8 9H4c-.6 0-2-.4-2-1s1.5-2.5 3.5-2.5S7.7 6.5 9 7h12c.6 0 1 .4 1 1v3zM10.8 6.5L14 3h2l-2.2 3.5h-3zM18 11V9.5h1.8L19 11h-1zM3 19c-.6 0-1-.4-1-1s.4-1 1-1c2.2 0 4 1.8 4 4 0 .6-.4 1-1 1s-1-.4-1-1c0-1.1-.9-2-2-2zm8 2c0 .6-.4 1-1 1s-1-.4-1-1c0-3.3-2.7-6-6-6-.6 0-1-.4-1-1s.4-1 1-1c4.4 0 8 3.6 8 8z' })
    )
  );
};

exports.default = Icon;