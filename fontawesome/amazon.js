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
      _react2.default.createElement('path', { d: 'M20.8 19.8q.2-.1.3-.1t.2.3-.2.4l-.6.6q-.4.4-1.3.9t-1.9 1-2.5.8-3.1.3q-1.6 0-3.2-.4t-2.8-1-2.3-1.4-1.8-1.4-1.1-1.2q-.1-.1-.1-.2t0-.2.1-.1.2 0 .1 0q2.6 1.6 4 2.3 5.2 2.3 10.7 1.2 2.6-.6 5.3-1.8zm2.7-1.6q.2.2.1 1t-.4 1.3q-.5 1.1-1.1 1.7-.3.2-.4.1t0-.3q.3-.6.6-1.6t.1-1.4q-.1 0-.2-.1t-.4-.1-.4 0-.4 0-.5 0-.4 0-.3.1H19.5h-.4q-.1-.3.6-.6t1.4-.4q.6-.1 1.4 0t1 .3zm-5.2-5.9q0 .4.1.9t.5.7.5.6.4.5l.2.1-3 3q-.6-.5-1.1-1t-.8-.8l-.2-.2q-.2-.2-.4-.5-.5.8-1.3 1.4t-1.7.8-1.9.3-1.8-.2-1.6-.9-1.1-1.5-.4-2.2q0-1.1.4-2.1T6 9.7t1.5-1.1 1.6-.8 1.7-.5 1.6-.2 1.4-.1V5.3q0-.9-.3-1.3-.5-.7-1.6-.7h-.2q-.1 0-.6.2t-.7.4-.8.8T9 5.9l-4-.3q0-.8.3-1.6t.9-1.5 1.5-1.3 2-.9 2.6-.3q1.3 0 2.4.3t1.7.9 1.1 1.1.6 1.1.2 1v7.9zm-9 .3q0 1.1.9 1.8.9.5 1.9.3 1.1-.4 1.5-1.7.2-.6.2-1.3V9.5q-.8 0-1.5.1t-1.4.5-1.2.9-.4 1.6z' })
    )
  );
};

exports.default = Icon;