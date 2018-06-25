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
      _react2.default.createElement('path', { d: 'M12 12.9v6q0 .3-.3.6t-.6.2-.6-.2l-1.9-2L4.2 22q-.2.1-.3.1t-.4-.1L2 20.5q-.1-.2-.1-.4t.1-.3l4.5-4.4-2-1.9q-.2-.3-.2-.6t.2-.6.6-.3h6q.4 0 .6.3t.3.6zm10.1-9q0 .1-.1.3l-4.5 4.4 2 1.9q.2.3.2.6t-.2.6-.6.3h-6q-.4 0-.6-.3t-.3-.6v-6q0-.3.3-.6t.6-.2.6.2l1.9 2L19.8 2q.2-.1.3-.1t.4.1L22 3.5q.1.2.1.4z' })
    )
  );
};

exports.default = Icon;