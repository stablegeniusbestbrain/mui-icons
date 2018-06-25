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
      _react2.default.createElement('path', { d: 'M21.3 7.2c0-1.2-.4-2.3-1.3-3.2s-2-1.3-3.2-1.3c-1.2 0-2.3.4-3.2 1.3l-8 7.9c-.3.4-.7.9-.9 1.6-.2.4-2 5.8-2.4 6.9-.1.3 0 .7.3 1 .2.2.4.3.7.3h.3c1.1-.4 6.5-2.2 6.9-2.4.6-.2 1.2-.6 1.6-1l2.1-2.1h.1c.6 0 1.3-.2 1.8-.7l4.5-4.5c.7-.7.8-1.7.5-2.6.2-.4.2-.8.2-1.2zM9.5 17.6c-.4.1-1.2.4-2.1.7l-1.7-1.7c.3-.9.6-1.7.7-2.1l3.1 3.1zm-4.1 0l1 1-1.5.5.5-1.5zm7.7-3.1l-2.5 2.4-.2.2-3.5-3.5.2-.2 7.1-7.2L16.9 9l-3.7 3.6c-.5.6-.5 1.3-.1 1.9zm6-4.9l-4.5 4.5c-.1.1-.2.1-.3.1s-.3 0-.4-.1c-.2-.2-.2-.5 0-.7l4.5-4.5c.2-.2.5-.2.7 0 .2.1.2.5 0 .7zm.2-1.8c-.6-.2-1.2-.1-1.6.3l-.1.1-2.7-2.7.1-.1c1-.9 2.6-.9 3.6 0 .5.5.7 1.1.7 1.8v.6z' })
    )
  );
};

exports.default = Icon;