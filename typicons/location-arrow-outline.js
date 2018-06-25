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
      _react2.default.createElement('path', { d: 'M11.1 20.9c-.4 0-1.2-.1-1.7-1.5l-1.2-3.6-3.6-1.2c-1.3-.4-1.5-1.2-1.5-1.6s.1-1.2 1.3-1.8l11.4-5.3c1-.4 1.9-.3 2.3.4.2.4.4 1 0 1.9l-5.3 11.4c-.6 1.1-1.3 1.3-1.7 1.3zm-5.4-8.1l4.1 1.4 1.4 4.1 4.7-10.2-10.2 4.7z' })
    )
  );
};

exports.default = Icon;