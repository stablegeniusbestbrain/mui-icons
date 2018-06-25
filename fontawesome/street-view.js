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
      _react2.default.createElement('path', { d: 'M20.6 20.6q0 .8-.9 1.5t-2.1 1.1-3.1.6-3.4.2-3.4-.2-3-.6-2.2-1.1-.8-1.5q0-.7.5-1.2t1.2-.9 1.6-.6 1.7-.4q.4-.1.7.1t.3.6q.1.3-.1.6t-.6.4q-.8.1-1.4.3t-1 .3-.7.4-.4.2-.1.2q.1.1.4.3t1 .5 1.5.4 2.1.4 2.7.1 2.7-.1 2.2-.4 1.5-.4 1-.5.4-.3l-.2-.2q-.1-.1-.3-.2t-.7-.4-1-.3-1.4-.3q-.4-.1-.6-.4t-.1-.6q0-.3.3-.6t.7-.1q.9.2 1.7.4t1.6.6 1.2.9.5 1.2zm-5.2-12v5.1q0 .4-.2.6t-.6.3h-.9v5.1q0 .4-.2.6t-.6.3H9.4q-.3 0-.6-.3t-.2-.6v-5.1h-.9q-.3 0-.6-.3t-.2-.6V8.6q0-.7.5-1.2t1.2-.5h5.1q.7 0 1.2.5t.5 1.2zm-1.3-5.2q0 1.3-.8 2.2t-2.2.8T9 5.6t-.9-2.2.9-2.1 2.1-.9 2.2.9.8 2.1z' })
    )
  );
};

exports.default = Icon;