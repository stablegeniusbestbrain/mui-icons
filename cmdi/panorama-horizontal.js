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
      _react2.default.createElement('path', { d: 'M21.4 4c-.1 0-.2 0-.3.1-2.9 1.1-6 1.6-9.1 1.6-3.1 0-6.2-.5-9.1-1.6-.1-.1-.2-.1-.3-.1-.4 0-.6.2-.6.6v14.8c0 .4.2.6.6.6.1 0 .2 0 .3-.1 2.9-1.1 6-1.6 9.1-1.6 3.1 0 6.2.6 9.1 1.6.1.1.2.1.3.1.4 0 .6-.2.6-.6V4.6c0-.4-.2-.6-.6-.6zM20 6.5v10.9c-2.6-.7-5.3-1.1-8-1.1s-5.4.4-8 1.1V6.5c2.6.8 5.3 1.2 8 1.2s5.4-.4 8-1.2z' })
    )
  );
};

exports.default = Icon;