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
      _react2.default.createElement('path', { d: 'M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20l-3 3-3-3v-1.5l-7.1-7.1c-.3.1-.6.1-.9.1v-2.2c1.7 0 3.6-.8 4.7-2l1.4-1.6c.2-.2.4-.3.7-.5.2-.1.6-.2.9-.2C16 6 17 7 17 8.3V14c0 .8-.4 1.6-.9 2.2l-3.6-3.6v-2.3c-.6.5-1.4 1-2.3 1.4l6.3 6.3H18l3 3z' })
    )
  );
};

exports.default = Icon;