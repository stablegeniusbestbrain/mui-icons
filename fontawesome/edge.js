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
      _react2.default.createElement('path', { d: 'M.9 10.6q.3-1.6.8-3.2t1.6-2.9 2.2-2.4 3-1.5 3.7-.6q3.1 0 5.5 1.4t4 4.1q1.4 2.5 1.4 5.9v2.5H8q0 1.5.7 2.6t1.9 1.6 2.5.8 2.8 0 2.8-.6 2.4-1.1v5q-1.3.8-3.1 1.3t-4.2.5-4.2-.7q-2.6-1-4.2-3.4t-1.7-5q0-3.2 1.5-5.5t4.4-3.6q-.7.8-1.1 1.7t-.6 2.2h8.5q.1-1.1-.1-1.9t-.6-1.4-1-.9-1.1-.5-1-.3-.7-.1h-.3q-1.8 0-3.5.6t-3 1.4-2.3 1.9-1.9 2.1z' })
    )
  );
};

exports.default = Icon;