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
      _react2.default.createElement('path', { d: 'M14.5 0v20.6l-3.6 1.7q-3.1-.3-5.5-1.4t-4-2.8T0 14.5q0-1.9 1.3-3.6T5 8.2t5.3-1.4v2.3q-2.9.5-4.8 2t-1.9 3.4q0 2 2.1 3.6t5.2 1.9V1.8zm9 7.8L24 13l-7-1.5 1.9-1.1q-1.6-1-3.7-1.3V6.8q3.7.4 6.4 2.1z' })
    )
  );
};

exports.default = Icon;