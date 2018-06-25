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
      _react2.default.createElement('path', { d: 'M18.9 12.4v4.3q0 1.6-1.2 2.7T15 20.6H3.9q-1.6 0-2.8-1.2T0 16.7V5.6Q0 4 1.1 2.8t2.8-1.1h9.4q.2 0 .3.1t.1.3V3q0 .2-.1.3t-.3.1H3.9q-.9 0-1.6.7t-.6 1.5v11.1q0 .9.6 1.5t1.6.7H15q.9 0 1.5-.7t.6-1.5v-4.3q0-.2.2-.3t.3-.1h.8q.2 0 .3.1t.2.3zM24 .9v6.8q0 .4-.3.6t-.6.3-.6-.3L20.2 6l-8.7 8.7q-.2.1-.4.1t-.3-.1l-1.5-1.5q-.1-.2-.1-.3t.1-.4L18 3.8l-2.3-2.3q-.3-.3-.3-.6t.3-.6.6-.3h6.8q.4 0 .6.3t.3.6z' })
    )
  );
};

exports.default = Icon;