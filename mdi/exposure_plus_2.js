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
      _react2.default.createElement('path', { d: 'M16.1 16.3l2.8-3.1c.4-.4.7-.8 1-1.2.4-.4.6-.7.9-1.1.2-.4.4-.8.5-1.2.1-.4.2-.8.2-1.2 0-.5-.1-1-.3-1.4-.1-.5-.4-.8-.8-1.2-.3-.3-.7-.5-1.2-.7-.5-.1-1.1-.2-1.7-.2-.7 0-1.3.1-1.9.3-.5.2-1 .5-1.3.9-.4.4-.7.8-.9 1.3-.2.5-.2 1-.3 1.5h2.2c0-.3 0-.6.1-.9.1-.3.2-.5.4-.7.2-.2.4-.4.7-.5.3-.1.6-.2 1-.2.3 0 .5.1.8.2.2.1.4.2.6.4l.3.6c.1.3.2.6.2.9 0 .2-.1.4-.1.6-.1.2-.2.5-.3.7-.2.3-.3.5-.6.8-.2.3-.5.7-.9 1.1l-4.1 4.5V18H22v-1.7h-5.9zM8 7H6v4H2v2h4v4h2v-4h4v-2H8V7z' })
    )
  );
};

exports.default = Icon;