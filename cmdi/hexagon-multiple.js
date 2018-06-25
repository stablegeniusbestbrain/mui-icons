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
      _react2.default.createElement('path', { d: 'M10.3 2c.1 0 .3.1.4.3l2.2 3.9.1.3-.1.3-2.2 3.9c-.1.2-.3.3-.4.3H5.8c-.2 0-.4-.1-.5-.3L3.1 6.8 3 6.5l.1-.3 2.2-3.9c.1-.2.3-.3.5-.3h4.5zm0 11c.1 0 .3.1.4.3l2.2 3.9.1.3-.1.3-2.2 3.9c-.1.2-.3.3-.5.3H5.7c-.1 0-.3-.1-.4-.3l-2.2-3.9-.1-.3.1-.3 2.2-3.9c.1-.2.3-.3.5-.3h4.5zm9.2-5.5c.2 0 .4.1.4.3l2.3 3.9.1.3-.1.3-2.3 3.9c0 .2-.2.3-.4.3H15c-.2 0-.4-.1-.4-.3l-2.3-3.9v-.6l2.3-3.9c0-.2.2-.3.4-.3h4.5z' })
    )
  );
};

exports.default = Icon;