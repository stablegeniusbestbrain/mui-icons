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
      _react2.default.createElement('path', { d: 'M17 2c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2v8c0 .8-.5 1.6-1.3 1.9l-6.2 2.9c-1 .4-2.2 0-2.7-1L6 19c-.5-1-.1-2.2.9-2.7l3.1-1.4V9c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h7zm-7 2v3h7V4h-7z' })
    )
  );
};

exports.default = Icon;