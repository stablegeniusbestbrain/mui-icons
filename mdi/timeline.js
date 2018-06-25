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
      _react2.default.createElement('path', { d: 'M23 8c0 1.1-.9 2-2 2-.2 0-.4 0-.5-.1l-3.6 3.6c.1.1.1.3.1.5 0 1.1-.9 2-2 2s-2-.9-2-2c0-.2 0-.4.1-.5l-2.6-2.6c-.1.1-.3.1-.5.1s-.4 0-.5-.1l-4.6 4.6c.1.1.1.3.1.5 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.2 0 .4 0 .5.1l4.6-4.6C8 9.4 8 9.2 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .2 0 .4-.1.5l2.6 2.6c.1-.1.3-.1.5-.1s.4 0 .5.1l3.6-3.6c-.1-.2-.1-.3-.1-.5 0-1.1.9-2 2-2s2 .9 2 2z' })
    )
  );
};

exports.default = Icon;