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
      _react2.default.createElement('path', { d: 'M11.1.9v8.5q0 .8-.4 1.5t-1.3 1v10.4q0 .7-.5 1.2t-1.2.5H6q-.7 0-1.2-.5t-.5-1.2V11.9q-.8-.3-1.3-1t-.4-1.5V.9q0-.4.2-.6t.6-.3.6.3.3.6v5.5q0 .4.2.6t.6.3.6-.3.3-.6V.9q0-.4.3-.6t.6-.3.6.3.2.6v5.5q0 .4.3.6t.6.3.6-.3.2-.6V.9q0-.4.3-.6t.6-.3.6.3.2.6zm10.3 0v21.4q0 .7-.5 1.2t-1.2.5H18q-.7 0-1.2-.5t-.5-1.2v-6.9h-3q-.2 0-.3-.1t-.1-.3V4.3q0-1.8 1.2-3t3-1.3h3.5q.3 0 .6.3t.2.6z' })
    )
  );
};

exports.default = Icon;