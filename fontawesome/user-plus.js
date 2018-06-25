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
      _react2.default.createElement('path', { d: 'M7.7 12q-2.1 0-3.6-1.5T2.6 6.9t1.5-3.7 3.6-1.5 3.7 1.5 1.5 3.7-1.5 3.6T7.7 12zm12.9 1.7h4.7q.2 0 .3.1t.1.3v2.6q0 .2-.1.3t-.3.1h-4.7v4.8q0 .1-.2.3t-.3.1h-2.5q-.2 0-.3-.1t-.2-.3v-4.8h-4.7q-.1 0-.3-.1t-.1-.3v-2.6q0-.1.1-.3t.3-.1h4.7V9q0-.2.2-.3t.3-.1h2.5q.2 0 .3.1t.2.3v4.7zm-9.9 3q0 .7.5 1.2t1.2.5h3.5v3.2q-1 .7-2.3.7H1.9q-1.7 0-2.6-.9t-1-2.6v-1.4q0-.7.2-1.4t.4-1.5.6-1.3.8-1.1 1.1-.7 1.5-.3q.3 0 .5.3 1.1.8 2.1 1.2t2.2.4 2.2-.4 2.1-1.2q.3-.3.5-.3 1.8 0 2.9 1.3h-3q-.7 0-1.2.5t-.5 1.2v2.6z' })
    )
  );
};

exports.default = Icon;