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
      _react2.default.createElement('path', { d: 'M13 20c-.8 0-1.6-.3-2.1-.9L3.8 12l7.1-7.1c1.1-1.2 3.1-1.2 4.2 0 .6.5.9 1.3.9 2.1s-.3 1.6-.9 2.1L12.2 12l2.9 2.9c.6.5.9 1.3.9 2.1s-.3 1.6-.9 2.1c-.5.6-1.3.9-2.1.9zm-6.4-8l5.7 5.7c.4.4 1 .4 1.4 0 .2-.2.3-.4.3-.7s-.1-.5-.3-.7L9.4 12l4.3-4.3c.2-.2.3-.4.3-.7s-.1-.5-.3-.7c-.4-.4-1-.4-1.4 0L6.6 12z' })
    )
  );
};

exports.default = Icon;