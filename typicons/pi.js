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
      _react2.default.createElement('path', { d: 'M18.7 8.5c-.4-.4-1-.4-1.4 0-1.3 1.3-3.3 1.3-4.6 0-2-2-5.4-2-7.4 0-.4.4-.4 1.1 0 1.4s1 .4 1.4 0c.4-.3.8-.6 1.3-.7V17c0 .6.4 1 1 1s1-.4 1-1V9.2c.5.1.9.4 1.3.7.8.8 1.7 1.3 2.7 1.5V17c0 .6.4 1 1 1s1-.4 1-1v-5.6c1-.2 1.9-.7 2.7-1.5.4-.3.4-1 0-1.4z' })
    )
  );
};

exports.default = Icon;