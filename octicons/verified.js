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
      _react2.default.createElement('path', { d: 'M23.5 10.6l-1.6-2c-.3-.3-.4-.7-.5-1.2l-.3-2.5a2.3 2.3 0 0 0-2-2l-2.5-.3c-.5-.1-.9-.2-1.2-.5l-2-1.6c-.8-.7-2-.7-2.8 0l-2 1.6c-.3.3-.7.4-1.2.5l-2.5.2c-1.1.2-1.9 1-2 2l-.3 2.6c-.1.4-.2.8-.5 1.2l-1.6 2c-.7.8-.7 2 0 2.8l1.6 2c.3.3.4.7.5 1.2l.3 2.5c.1 1.1.9 1.9 1.9 2l2.6.3c.4 0 .8.2 1.2.5l2 1.6c.8.7 2 .7 2.8 0l2-1.6c.3-.3.7-.4 1.2-.5l2.5-.3c1.1-.1 1.9-.9 2-2l.3-2.5c0-.5.2-.8.5-1.2l1.6-2c.7-.8.7-2 0-2.8zM9.8 18l-5.3-5.2 2.3-2.3 3 3L17.3 6l2.2 2.3L9.8 18z' })
    )
  );
};

exports.default = Icon;