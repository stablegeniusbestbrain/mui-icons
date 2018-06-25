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
      _react2.default.createElement('path', { d: 'M5.1 21.9l5.2-2.6v-4.2l-5.2 2.2v4.6zm-.8-6.1l5.4-2.3-5.4-2.4-5.4 2.4zm14.6 6.1l5.1-2.6v-4.2l-5.1 2.2v4.6zm-.9-6.1l5.4-2.3-5.4-2.4-5.4 2.4zm-6-3.9l5.1-2.3V6.1L12 8.3v3.6zm-.9-5.1L17 4.2l-5.9-2.5-5.9 2.5zm14.6 6.9v5.6q0 .5-.2.9t-.7.6l-6 3q-.4.2-.8.2t-.8-.2l-6-3h-.1-.1l-6 3q-.3.2-.7.2t-.8-.2l-6-3q-.4-.2-.7-.6t-.2-.9v-5.6q0-.5.3-.9t.7-.7l5.8-2.5V4.3q0-.5.3-1t.8-.6l6-2.6q.3-.1.6-.1t.7.1l6 2.6q.5.2.8.6t.3 1v5.3l5.8 2.5q.5.2.7.7t.3.9z' })
    )
  );
};

exports.default = Icon;