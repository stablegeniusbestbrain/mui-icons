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
      _react2.default.createElement('path', { d: 'M16.7 12.8l3.5-3.3-4.8-.7-.9-.2-.4-.8L12 3.5v12.9l.8.4 4.2 2.3-.8-4.8-.1-.9zm6.1-3.5L17.9 14l1.2 6.7q.1.5-.1.7t-.5.3q-.2 0-.5-.2l-6-3.1-6 3.1q-.3.2-.5.2-.4 0-.5-.3t-.1-.7L6.1 14 1.2 9.3q-.4-.4-.3-.8t.7-.5l6.7-.9 3-6.1q.3-.6.7-.6.4 0 .7.6l3 6.1 6.7.9q.6.1.7.5t-.3.8z' })
    )
  );
};

exports.default = Icon;