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
      _react2.default.createElement('path', { d: 'M17.3 9.4q0 .1.1.6.2.4.4.6t.5.5.6.3.7.2Q24 12.8 24 16q0 2-1.4 3.3t-3.4 1.3q-.8 0-1.5-.3t-1.2-.6-1.1-1-.8-1.2-.7-1.3-.6-1.4-.5-1.4-.5-1.3q-.4-1.1-.8-1.8t-1-1.3-1.4-.9-1.9-.2q-1.3 0-2.5.7t-1.8 2-.7 2.4q0 2.2 1.4 3.8t3.6 1.6q2.3 0 3.4-1.3.8-.8 1.1-1.6l1.1 2.1q-.2.4-.5.9-1.8 2.1-5.2 2.1-2 0-3.6-1.1T.9 16.7 0 13.1q0-1.4.6-2.8t1.5-2.4 2.3-1.6 2.8-.6q1.1 0 2.1.2t1.7.7 1.2 1.1 1 1.3.8 1.6.7 1.6.6 1.8.8 1.7q1.3 2.7 3.1 2.7 1.1 0 1.8-.7t.8-1.7q0-.6-.2-1t-.7-.6-1-.4-1.1-.4-1.2-.4-1.1-.7-.8-1.1-.6-1.6v-.5q0-1.5 1.2-2.6t2.6-1q1.1 0 1.6.2t1.3.7h-.1l.3.3q.1.1.4.5t.2.4l-1.7 1.3q-.3-.6-.7-.9-.3-.3-1.3-.3-.7 0-1.1.4t-.5 1.1z' })
    )
  );
};

exports.default = Icon;