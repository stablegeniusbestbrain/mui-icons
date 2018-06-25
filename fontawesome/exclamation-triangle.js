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
      _react2.default.createElement('path', { d: 'M13.7 18.4v-2.5q0-.2-.1-.3t-.3-.2h-2.6q-.2 0-.3.2t-.1.3v2.5q0 .2.1.3t.3.2h2.6q.2 0 .3-.2t.1-.3zm0-5l.2-6.1q0-.2-.1-.3-.2-.1-.3-.1h-3q-.1 0-.3.1-.1.1-.1.3l.2 6.1q0 .1.1.2t.4.1h2.4q.2 0 .3-.1t.2-.2zM13.5.9l10.3 18.9q.5.8 0 1.6-.3.4-.7.7t-.8.2H1.7q-.4 0-.8-.2t-.7-.7q-.5-.8 0-1.6L10.5.9q.2-.4.6-.7T12 0t.9.2.6.7z' })
    )
  );
};

exports.default = Icon;