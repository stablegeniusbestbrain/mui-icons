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
      _react2.default.createElement('circle', { cx: '7', cy: '6', r: '2' }),
      _react2.default.createElement('path', { d: 'M11.2 12c-.4-.2-.6-.5-.9-.7L8.9 9.7c-.2-.2-.4-.4-.7-.5-.2-.1-.6-.2-.9-.2C6 9 5 10 5 11.3v.7H2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8H11.2zM7 20H5v-6h2v6zm4 0H9v-6h2v6zm4 0h-2v-6h2v6zm4 0h-2v-6h2v6zm-.4-14.1v-.1c-.6-.6-.8-1.4-.7-2.2L18 3h-1.9v.4c-.2 1.4.2 2.7 1.3 3.8.6.6.8 1.4.7 2.2l-.1.6h1.9l.1-.4c.2-1.4-.3-2.7-1.3-3.7zm-4 0v-.1c-.6-.6-.8-1.4-.7-2.2L14 3h-1.9l-.1.4c-.2 1.4.3 2.7 1.3 3.8h.1c.6.6.8 1.4.7 2.2l-.1.6h1.9l.1-.4c.2-1.4-.3-2.7-1.3-3.7z' })
    )
  );
};

exports.default = Icon;