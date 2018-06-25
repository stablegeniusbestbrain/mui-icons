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
      _react2.default.createElement('path', { d: 'M17.1 12q0-.5-.4-.7L9.9 7q-.4-.3-.9 0-.4.2-.4.7v8.6q0 .5.4.7.2.1.4.1.3 0 .5-.1l6.8-4.3q.4-.2.4-.7zm6.9 0v2q0 .7-.1 1.8t-.3 2q-.2 1-1 1.7t-1.6.7q-3 .4-9 .4t-9-.4q-.9-.1-1.7-.7t-.9-1.7q-.2-.9-.3-2T0 14t0-2 0-2 .1-1.8.3-2q.2-1 1-1.7T3 3.8q3-.4 9-.4t9 .4q.9.1 1.7.7t.9 1.7q.2.9.3 2T24 10t0 2z' })
    )
  );
};

exports.default = Icon;