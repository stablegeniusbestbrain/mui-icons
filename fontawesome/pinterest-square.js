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
      _react2.default.createElement('path', { d: 'M18.4 1.7q1.6 0 2.8 1.1t1.1 2.8v12.8q0 1.6-1.1 2.8t-2.8 1.1H8.7q1.2-1.6 1.5-2.8.1-.5.7-2.8.3.5 1 .9t1.5.3q2.4 0 3.9-1.9t1.6-5q0-1.2-.5-2.2t-1.3-1.9-2-1.3-2.7-.5q-1.4 0-2.6.4t-2 1T6.3 8t-.9 1.7-.3 1.8q0 1.4.6 2.4t1.5 1.5q.2.1.3 0t.2-.3q.2-.6.2-.8.1-.3-.1-.5-.7-.9-.7-2.1 0-2 1.4-3.4t3.6-1.4q2 0 3.1 1.1t1.2 2.8q0 2.2-.9 3.8t-2.4 1.6q-.8 0-1.3-.6t-.3-1.4q.1-.4.4-1.2t.4-1.4.1-1q0-.6-.3-1.1t-1-.4q-.9 0-1.4.8t-.6 1.8q0 1 .3 1.6l-1.3 5.6q-.3 1.3-.1 3.4H5.6q-1.6 0-2.8-1.1t-1.1-2.8V5.6q0-1.6 1.1-2.8t2.8-1.1h12.8z' })
    )
  );
};

exports.default = Icon;