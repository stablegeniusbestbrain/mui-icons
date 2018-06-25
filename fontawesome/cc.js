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
      _react2.default.createElement('path', { d: 'M8.8 13.5h2.8q-.2 2.1-1.3 3.3T7.4 18Q5.2 18 4 16.5t-1.3-4.2q0-2.6 1.3-4.2t3.1-1.6q2 0 3.1 1.2t1.3 3.3H8.8q-.1-.9-.5-1.3t-1.1-.5q-.7 0-1.2.8t-.4 2.4q0 .6.1 1.1t.2.9.6.7.8.3q1.3 0 1.5-1.9zm9.5 0h2.8q-.2 2.1-1.3 3.3T16.9 18q-2.2 0-3.4-1.5t-1.2-4.2q0-2.6 1.2-4.2t3.1-1.6q2 0 3.1 1.2T21 11h-2.7q0-.9-.5-1.3t-1-.5q-.8 0-1.2.8t-.5 2.4q0 .6.1 1.1t.3.9.5.7.9.3q.6 0 1-.5t.4-1.4zm4.8-1.6q0-2.8-.2-4.1t-.8-2.2q-.1-.1-.2-.1t-.2-.2-.3-.2q-1.1-.8-9.3-.8-8.4 0-9.5.8l-.2.2q-.1.1-.3.1t-.2.2q-.6.8-.8 2.2t-.2 4.1q0 2.8.2 4.1t.8 2.2l.2.2q.1.1.3.2t.2.1q.6.5 3.2.7t6.3.2q8.2 0 9.3-.9.1 0 .3-.1t.2-.2.2-.2q.6-.8.8-2.2t.2-4.1zm2.6-10.2v20.6H-1.7V1.7h27.4z' })
    )
  );
};

exports.default = Icon;