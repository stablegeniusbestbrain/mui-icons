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
      _react2.default.createElement('path', { d: 'M17.4 7.8zm3.5 2.7q2 0 3.4 1.4t1.4 3.2q0 2.1-1.4 3.5T20.7 20q-1.2 0-2.2-.3t-1.8-1-1.6-1.4-1.5-1.7-1.4-1.8-1.4-1.7-1.6-1.4-1.8-1-2.1-.4q-2.1 0-3.4 1.3T.6 13.8q0 2.1 1.4 3.4t3.5 1.2q1.3 0 2.8-.5t2.6-1.3l.3-.2q.3-.2.4-.4t.3-.1q.1 0 .3.2t.1.3q0 .3-.8 1-1.3 1.2-3.1 1.9t-3.5.7q-1.8 0-3.3-.7T-.8 17t-.9-3.2q0-2.7 1.9-4.5t4.6-1.9q1.6 0 3.1.6t2.5 1.5 2 2.1 1.8 2.2 1.8 2.1 2 1.5 2.3.6q1.4 0 2.3-.9t.9-2.1q0-1.3-.9-2.2t-2.1-.8q-.4 0-1.1.2t-.9.3q-.3 0-.5-.2t-.2-.5q0-.2.1-.8t.1-.7q0-2.2-1.4-3.6T13 5.3q-.8 0-1.5.3t-1.1.5-.7.6-.5.2q-.2 0-.3-.1t-.2-.4q0-.2.4-.6.8-.9 1.9-1.4t2.5-.4q2.5 0 4.2 1.6t1.7 4.3v.8q.7-.2 1.5-.2z' })
    )
  );
};

exports.default = Icon;