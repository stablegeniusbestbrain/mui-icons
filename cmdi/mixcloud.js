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
      _react2.default.createElement('path', { d: 'M21.1 18.5c-.1 0-.3-.1-.4-.1-.3-.3-.4-.7-.2-1.1.7-1 1-2.1 1-3.4 0-1.2-.3-2.4-1-3.4-.2-.3-.1-.8.2-1 .3-.2.8-.1 1 .2.9 1.3 1.3 2.7 1.3 4.2s-.4 3-1.3 4.3c-.1.2-.4.3-.6.3zM19 17.3c-.1 0-.3 0-.4-.1-.3-.3-.4-.7-.2-1 .5-.7.7-1.5.7-2.3 0-.8-.2-1.5-.7-2.2-.2-.3-.1-.8.2-1 .3-.2.8-.1 1 .2.6.9 1 1.9 1 3s-.4 2.2-1 3.1c-.1.2-.3.3-.6.3zm-4.1-1.6c1 0 1.8-.8 1.8-1.8 0-.7-.5-1.4-1.1-1.6-.1.3-.2.5-.3.8-.1.3-.4.5-.7.5h-.2c-.4-.1-.6-.5-.5-.9.2-.5.3-.9.3-1.4 0-2.4-2-4.3-4.4-4.3-1.7 0-3.2 1-3.9 2.5.6.2 1.3.5 1.8 1 .2.3.2.8 0 1.1-.3.3-.8.3-1.1 0-.4-.5-1-.7-1.7-.7-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4h10zm.7-5c1.5.4 2.6 1.7 2.6 3.2 0 1.8-1.5 3.3-3.3 3.3h-10c-2.1 0-3.9-1.8-3.9-3.9 0-2 1.5-3.6 3.3-3.9.8-2.3 3-3.9 5.5-3.9 3 0 5.5 2.3 5.8 5.2z' })
    )
  );
};

exports.default = Icon;