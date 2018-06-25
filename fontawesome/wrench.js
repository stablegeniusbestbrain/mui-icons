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
      _react2.default.createElement('path', { d: 'M6 19.7q0-.3-.3-.6t-.6-.2-.6.2-.2.6.2.6.6.3.6-.3.3-.6zm8.6-5.6l-9.1 9.1q-.5.5-1.2.5t-1.2-.5l-1.5-1.4q-.5-.5-.5-1.2t.5-1.2l9.2-9.2q.5 1.3 1.5 2.4t2.3 1.5zm8.5-5.8q0 .5-.3 1.4-.6 1.8-2.2 2.9t-3.5 1.1q-2.4 0-4.2-1.7t-1.8-4.3 1.8-4.2 4.2-1.8q.8 0 1.7.2t1.4.7q.2.1.2.3t-.2.4l-3.9 2.3v3l2.6 1.4 1-.6q1-.6 1.8-1.1t1-.5q.2 0 .3.1t.1.4z' })
    )
  );
};

exports.default = Icon;