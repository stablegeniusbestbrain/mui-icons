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
      _react2.default.createElement('path', { d: 'M6.4 3.7c.1 0 .2-.1.2-.1C8.2 2.5 10 2 12 2c1.9 0 3.6.5 5.1 1.4.1.1.4.3.6.5C16.2 2.3 12 5.7 12 5.7c-1.5-1.1-2.8-1.9-3.8-2.2-.9-.2-1.5 0-1.7.2zm12.9 1.5l-.1-.1c-.4-.4-.8-.5-1.2-.5-.4.1-2.1.7-4.2 2.7 0 0 2.4 2.3 3.8 4.7 1.5 2.3 2.3 4.2 1.8 6.7C21 16.9 22 14.6 22 12c0-2.6-1-5-2.7-6.8zM15.7 13c-.6-.8-1.6-1.8-2.8-3l-.9-.9-1.1 1.1c-.7.7-1.7 1.8-2.3 2.3-1 1.1-3.8 4.4-3.9 6.2 0 0-.7-1.4.7-4.8.9-2.2 3.6-5.5 4.8-6.6 0 0-1.1-1.2-2.4-1.9v-.1c-.7-.3-1.3-.6-2-.7-.7.1-1.1.6-1.1.6C3 6.9 2 9.4 2 12c0 5.5 4.5 10 10 10 2.9 0 5.6-1.3 7.4-3.3 0 0-.2-1.3-1.6-3.2-.3-.4-1.4-1.8-2.1-2.5z' })
    )
  );
};

exports.default = Icon;