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
      _react2.default.createElement('path', { d: 'M1.7 13.7h23.2q.3 0 .6.3t.2.6v6h-3.4v-3.5H1.7v3.5h-3.4V4.3q0-.4.2-.6t.6-.3H.9q.3 0 .6.3t.2.6v9.4zm7.7-4.3q0-1.4-1-2.4T6 6 3.6 7t-1 2.4 1 2.5 2.4 1 2.4-1 1-2.5zm16.3 3.5V12q0-2.1-1.5-3.6t-3.6-1.5h-9.5q-.3 0-.6.2t-.2.6v5.2h15.4z' })
    )
  );
};

exports.default = Icon;