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
      _react2.default.createElement('path', { d: 'M22.3 20.1V9.9q-.4.4-.9.8-3.6 2.8-5.7 4.6-.7.5-1.2.9t-1.1.6-1.4.3q-.7 0-1.4-.3t-1.1-.6-1.2-.9q-2.1-1.8-5.7-4.6-.5-.4-.9-.8v10.2q0 .2.1.3t.3.2h19.8q.1 0 .3-.2t.1-.3zm0-14v-.5l-.1-.2v-.1l-.2-.1-.1-.1H2.1q-.1 0-.3.2t-.1.3q0 2.2 2 3.8 2.6 2 5.4 4.2 0 .1.4.4t.6.5.6.4.7.4.6.1q.3 0 .6-.1t.7-.4.6-.4.6-.5.4-.4q2.8-2.2 5.4-4.2.7-.6 1.4-1.6t.6-1.7zm1.7-.5v14.5q0 .9-.6 1.6t-1.5.6H2.1q-.8 0-1.5-.6T0 20.1V5.6q0-.9.6-1.5t1.5-.7h19.8q.8 0 1.5.7t.6 1.5z' })
    )
  );
};

exports.default = Icon;