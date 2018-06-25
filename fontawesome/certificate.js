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
      _react2.default.createElement('path', { d: 'M20.1 12l1.9 1.8q.4.4.3.9-.2.6-.7.7l-2.6.7.8 2.5q.1.5-.3.9t-.9.3l-2.5-.8-.7 2.6q-.1.5-.7.7h-.2q-.4 0-.7-.3L12 20.1 10.2 22q-.4.4-.9.3-.6-.2-.7-.7L7.9 19l-2.5.8q-.5.1-.9-.3t-.3-.9l.8-2.5-2.6-.7q-.5-.1-.7-.7-.1-.5.3-.9L3.9 12 2 10.2q-.4-.4-.3-.9.2-.6.7-.7L5 7.9l-.8-2.5q-.1-.5.3-.9t.9-.3l2.5.8.7-2.6q.1-.5.7-.6.5-.2.9.2L12 3.9 13.8 2q.4-.4.9-.2.6.1.7.6l.7 2.6 2.5-.8q.5-.1.9.3t.3.9L19 7.9l2.6.7q.5.1.7.7.1.5-.3.9z' })
    )
  );
};

exports.default = Icon;