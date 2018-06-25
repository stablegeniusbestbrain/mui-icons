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
      _react2.default.createElement('path', { d: 'M17.8 16.9H16v-6.1h1.8v6.1zm.2-8.3c0 .6-.5 1.1-1.1 1.1s-1.1-.5-1.1-1.1.5-1.1 1.1-1.1S18 8 18 8.6zm3.8 8.3h-1.9v-6.1h1.9v6.1zm.2-8.3c0 .6-.5 1.1-1.1 1.1s-1.1-.5-1.1-1.1.5-1.1 1.1-1.1S22 8 22 8.6zm-9.1-.5h2l-2.1 7.4s-.3 1.5-1.5 1.5-1.5-1.5-1.5-1.5l-1.4-4.9-1.3 4.9S6.8 17 5.6 17s-1.5-1.5-1.5-1.5L2 8.1h2l1.7 6.6 1.4-5.4C7.4 8 8.4 8 8.4 8s1.1-.1 1.4 1.3l1.4 5.4 1.7-6.6z' })
    )
  );
};

exports.default = Icon;