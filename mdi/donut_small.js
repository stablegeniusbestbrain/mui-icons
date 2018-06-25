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
      _react2.default.createElement('path', { d: 'M11 9.2V2c-5 .5-9 4.8-9 10s4 9.5 9 10v-7.2c-1-.4-2-1.5-2-2.8s1-2.4 2-2.8zm3.9 1.8H22c-.5-4.7-4-8.5-9-9v7.2c1 .3 1.5.9 1.9 1.8zM13 14.8V22c5-.5 8.5-4.2 9-9h-7.1c-.4.9-.9 1.5-1.9 1.8z' })
    )
  );
};

exports.default = Icon;