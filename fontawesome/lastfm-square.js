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
      _react2.default.createElement('path', { d: 'M20.9 14.1q0-2.3-3.1-3.2-.5-.1-.8-.2t-.5-.4-.3-.6l-.1-.1q-.1-.1 0-.2t0-.1q0-.4.3-.8t.8-.3q.7 0 1 .2h-.1q.3.2.6.7l1.2-.9q-.5-.8-.6-.9-.5-.4-.9-.5t-1.2-.2q-1.1 0-1.9.8t-.8 1.9v.3q.2 1.2.9 1.8t2 1l.6.2q.3.1.6.3t.5.5.2.6v.1q0 .7-.5 1.2t-1.4.5q-1.3 0-2.2-2-.3-.6-.7-1.6t-.6-1.7-.8-1.4-1-1.3-1.3-.8-2-.4q-1.4 0-2.6.8t-1.9 2-.7 2.5v.1q.1 1.4.7 2.6t1.8 2 2.6.8q2.5 0 3.7-1.5.3-.4.5-.7l-.8-1.5q-.6 1.1-1.4 1.6t-1.9.5q-1.6 0-2.6-1.2t-1-2.7q0-1.4 1.1-2.6t2.5-1.1q1.5 0 2.3.7t1.4 2.4q.1.2.3.9t.4 1 .4 1 .5 1 .6.8.8.7.9.5 1 .2q1.5 0 2.5-1t1-2.3zm1.4-8.5v12.8q0 1.6-1.1 2.8t-2.8 1.1H5.6q-1.6 0-2.8-1.1t-1.1-2.8V5.6q0-1.6 1.1-2.8t2.8-1.1h12.8q1.6 0 2.8 1.1t1.1 2.8z' })
    )
  );
};

exports.default = Icon;