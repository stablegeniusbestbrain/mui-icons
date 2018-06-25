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
      _react2.default.createElement('path', { d: 'M4 2c-.6 0-1 .4-1 1s.4 1 1 1c1.7 0 3 1.3 3 3v8.5c0 3.6 2.9 6.5 6.5 6.5s6.5-2.9 6.5-6.5V13c.6 0 1-.4 1-1s-.4-1-1-1h-6c-.6 0-1 .4-1 1s.4 1 1 1v2c0 .6-.4 1-1 1s-1-.4-1-1v-4c.6 0 1-.4 1-1s-.4-1-1-1V8c.6 0 1-.4 1-1s-.4-1-1-1v-.5C12 3.6 10.4 2 8.5 2H4z' })
    )
  );
};

exports.default = Icon;