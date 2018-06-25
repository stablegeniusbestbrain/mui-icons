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
      _react2.default.createElement('path', { d: 'M22.4 10.3q1.5.7 2.4 2t.9 3q0 2.2-1.6 3.7t-3.8 1.6H3.7q-2.3-.2-3.8-1.7t-1.6-3.8q0-1.5.7-2.7t2-2Q.8 9.9.8 9.3q0-1.5 1.1-2.6t2.7-1.1q1.3 0 2.3.8 1-2.1 3-3.3t4.4-1.3q2.2 0 4 1.1t3 2.9 1.1 4.1v.4zM4.6 13.9q0 1.6 1.1 2.6t2.8.9q1.8 0 3.2-1.3-.2-.3-.7-.7t-.5-.7q-.9.8-2 .8-.7 0-1.2-.4t-.5-1.2q0-.7.5-1.1t1.2-.5q.6 0 1.1.3t1 .7.9 1 .9 1.1 1 1 1.3.8 1.7.3q1.6 0 2.7-1t1.1-2.6q0-1.6-1.1-2.5t-2.8-1q-1.9 0-3.2 1.3.2.2.4.5t.5.5.3.5q.9-.9 1.9-.9.7 0 1.3.4t.5 1.2q0 .7-.5 1.2t-1.2.5q-.6 0-1.1-.3t-1-.8-.9-1-.9-1.1-1.1-1-1.2-.7-1.6-.3q-1.7 0-2.8 1t-1.1 2.5z' })
    )
  );
};

exports.default = Icon;