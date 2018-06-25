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
      _react2.default.createElement('path', { d: 'M21 7h-3c0-1.7-1.4-3-3-3H3C1.4 4 0 5.3 0 7v7c0 1.7 1.4 3 3 3v3l3-3c0 1.6 1.3 3 3 3h8l3 3v-3h1c1.6 0 3-1.4 3-3v-7c0-1.7-1.4-3-3-3zM3 15c-.5 0-1-.5-1-1V7c0-.5.5-1 1-1h12c.5 0 1 .5 1 1v1H9.5C8.1 8 7 9.1 7 10.5V15H3zm19 2c0 .5-.5 1-1 1H9c-.5 0-1-.5-1-1v-6.5C8 9.7 8.7 9 9.5 9H21c.5 0 1 .5 1 1v7z' })
    )
  );
};

exports.default = Icon;