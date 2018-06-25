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
      _react2.default.createElement('path', { d: 'M1.8 1.7h2.7q-1 .9-1.7 2-.5.8-.8 1.6t-.4 1.6-.1 1.6.1 1.8.3 1.7.4 1.8q0 .3.1.4.7 3.2 1.1 4.4.7 2.3 2 3.7H1.8q-.6 0-1-.5t-.5-1.1V3.3q0-.7.5-1.1t1-.5zm16.2 0h4.2q.6 0 1 .5t.5 1.1v17.4q0 .7-.5 1.1t-1 .5h-2.4q2.8-2.8 2.6-7.6l-6.3 1.4q0 .6-.1 1.1t-.5.9-.8.8-1.2.5q-1.7.4-2.7-.5-.4-.4-.7-.8t-.7-1.8-.8-3.4q-.5-2.2-.7-3.5t0-1.9.3-1q.3-.6.8-1t1.4-.6q.6-.2 1.1-.1t.9.2.7.5.6.6.5.8l6.2-1.3q-.9-2.4-2.4-3.9z' })
    )
  );
};

exports.default = Icon;