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
      _react2.default.createElement('path', { d: 'M9 17.2q.3-.5.2-.9t-.6-.7q-.5-.2-1 0t-.8.6q-.3.5-.2.9t.6.7 1 0 .8-.6zm1.3-1.6q.1-.2 0-.4t-.2-.2q-.2-.1-.4 0t-.3.2q-.2.4.2.6.2.1.4 0t.3-.2zm2.3 1.4q-.6 1.4-2.1 2t-3 .2q-1.4-.5-2-1.7t.1-2.5q.7-1.3 2.1-1.9t2.8-.2q1.5.3 2.1 1.6t0 2.5zm4.2-2.1q-.1-1.3-1.2-2.3t-2.8-1.5-3.7-.3q-2.9.4-4.9 1.9t-1.8 3.6q.1 1.3 1.2 2.3T6.4 20t3.7.3q3-.3 4.9-1.9t1.8-3.5zm4.1 0q0 .9-.5 1.9T19 18.6t-2.3 1.6-3 1.1-3.6.4-3.7-.4T3.2 20 .9 18 0 15.3q0-1.5.9-3.2t2.7-3.5q2.2-2.3 4.5-3.2t3.4.1q.8.9.2 2.8v.3q0 .1.1.1t.2 0 .2-.1h.1q1.9-.8 3.3-.8t2 .8q.6.9 0 2.4v.5q0 .1.2.1t.2 0q.8.3 1.4.7t1.1 1.1.4 1.5zm-1-8.3q.6.6.8 1.4t-.1 1.6q-.1.3-.4.4t-.6.1q-.3-.1-.5-.4t0-.6q.3-.8-.3-1.5t-1.5-.4q-.3 0-.6-.2t-.3-.5q-.1-.3.1-.5t.5-.4q.8-.2 1.6.1t1.3.9zm2.5-2.2q1.1 1.3 1.5 3t-.2 3.2q-.1.4-.5.5t-.7.1-.5-.5-.1-.7q.4-1.1.2-2.3T21 5.6q-.8-.9-2-1.3t-2.3-.1q-.4.1-.7-.1t-.4-.6.1-.7.6-.4q1.7-.3 3.3.2t2.8 1.8z' })
    )
  );
};

exports.default = Icon;