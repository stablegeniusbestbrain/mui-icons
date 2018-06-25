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
      _react2.default.createElement('path', { d: 'M21.9 21.4q.1 0 .3.1t.1.4v1.7q0 .2-.1.3t-.3.1H2.1q-.1 0-.3-.1t-.1-.3v-1.7q0-.2.1-.4t.3-.1h19.8zm-18.4-.8q0-.8.2-1.5t.4-1.2.6-1.2.7-1 .9-.9.9-.9.9-.7.9-.6.9-.6l-.9-.6-.9-.6q-.6-.4-.9-.7t-.9-.9-.9-.9-.7-1-.6-1.2-.4-1.2-.2-1.5h17q0 .8-.2 1.5t-.4 1.2-.6 1.2-.7 1-.9.9-.9.9-.9.7-.9.6-.9.6l.9.6.9.6q.6.4.9.7t.9.9.9.9.7 1 .6 1.2.4 1.2.2 1.5h-17zM21.9 0q.1 0 .3.1t.1.3v1.7q0 .2-.1.4t-.3.1H2.1q-.1 0-.3-.1t-.1-.4V.4q0-.2.1-.3t.3-.1h19.8z' })
    )
  );
};

exports.default = Icon;