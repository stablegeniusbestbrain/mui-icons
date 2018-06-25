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
      _react2.default.createElement('path', { d: 'M14 12.1q0-.3-.1-.8H9.1V13H12q-.1.4-.2.7t-.5.7-.9.6-1.3.2q-1.4 0-2.3-.9T5.9 12t.9-2.3 2.3-.9q1.2 0 2 .7l1.4-1.3q-1.4-1.3-3.4-1.3-2.2 0-3.7 1.5T3.9 12t1.5 3.6 3.7 1.5q2.2 0 3.5-1.4t1.4-3.6zm4.6.6h1.5v-1.4h-1.5V9.8h-1.5v1.5h-1.4v1.4h1.4v1.5h1.5v-1.5zm3.7-7.1v12.8q0 1.6-1.1 2.8t-2.8 1.1H5.6q-1.6 0-2.8-1.1t-1.1-2.8V5.6q0-1.6 1.1-2.8t2.8-1.1h12.8q1.6 0 2.8 1.1t1.1 2.8z' })
    )
  );
};

exports.default = Icon;