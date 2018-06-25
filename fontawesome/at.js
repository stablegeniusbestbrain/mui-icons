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
      _react2.default.createElement('path', { d: 'M14.7 10.4q0-1.5-.7-2.3t-2-.8q-.8 0-1.6.4T8.9 8.8t-1.1 1.9-.4 2.4q0 1.5.7 2.3t2.1.8q1.3 0 2.3-.9t1.7-2.2.5-2.7zm7.6 1.6q0 1.5-.5 2.6t-1.3 1.8-1.8 1-1.9.4h-.5q-1.2 0-1.9-.7-.3-.4-.4-1.1-.7.9-1.8 1.5t-2.3.6q-2.1 0-3.3-1.3t-1.2-3.6q0-2.1.9-3.9t2.4-2.8T12 5.4q1.1 0 2 .5t1.5 1.3V7l.1-.8.1-.1.1-.1h1.6q.1 0 .2.1t0 .3L16 14.6v.6q0 .5.1.7t.6.2q.4 0 .8-.1t1-.3 1-.7.8-1.2.3-1.8q0-3.9-2.4-6.2T12 3.4q-1.7 0-3.3.7T5.9 5.9 4.1 8.7 3.4 12t.7 3.3 1.8 2.8 2.8 1.8 3.3.7q3.1 0 5.4-2 .2-.1.3-.1t.3.2l.6.7q.1.1.1.3-.1.1-.2.3-1.4 1.1-3 1.7t-3.5.6q-2.1 0-4-.8t-3.3-2.2T2.5 16t-.8-4 .8-4 2.2-3.3T8 2.5t4-.8q4.6 0 7.4 2.9t2.9 7.4z' })
    )
  );
};

exports.default = Icon;