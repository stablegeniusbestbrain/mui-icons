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
      _react2.default.createElement('path', { d: 'M15.5 14l5 5-1.5 1.5-5-5v-.8l-.3-.3c-1.1 1-2.6 1.6-4.2 1.6C5.9 16 3 13.1 3 9.5S5.9 3 9.5 3 16 5.9 16 9.5c0 1.6-.6 3.1-1.6 4.2l.3.3h.8zm-6-9.5h-.6c-.2.6-.6 1.4-.8 2.5h2.8c-.2-1.1-.6-1.9-.9-2.5h-.5zM13.8 7c-.6-1-1.5-1.8-2.7-2.2.3.5.6 1.3.8 2.2h1.9zM5.2 7h1.9c.2-.9.5-1.7.8-2.2C6.7 5.2 5.8 6 5.2 7zm-.7 2.5c0 .5.1 1 .2 1.5h2.2l-.1-1.5.1-1.5H4.7c-.1.5-.2 1-.2 1.5zm9.8 1.5c.1-.5.2-1 .2-1.5s-.1-1-.2-1.5h-2.2c.1.5.1 1 .1 1.5s0 1-.1 1.5h2.2zM7.9 8l-.2 1.5.2 1.5h3.2c.1-.5.1-1 .1-1.5s0-1-.1-1.5H7.9zm1.6 6.5h.5c.3-.6.7-1.4.9-2.5H8.1c.2 1.1.6 1.9.9 2.5h.5zm4.3-2.5h-1.9c-.2.9-.5 1.7-.8 2.2 1.2-.4 2.1-1.2 2.7-2.2zm-8.6 0c.6 1 1.5 1.8 2.7 2.2-.3-.5-.6-1.3-.8-2.2H5.2z' })
    )
  );
};

exports.default = Icon;