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
      _react2.default.createElement('path', { d: 'M18 6h-1V3c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v3h-2V3c0-.6-.4-1-1-1H8c-.6 0-1 .4-1 1v3H6c-.6 0-1 .4-1 1v4.2c.2 2.5 1.8 4.6 4 5.6V20c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-3.2c2.2-1 3.7-3.1 4-5.6V7c0-.6-.4-1-1-1zm-4-3h2v3h-2V3zM8 3h2v3H8V3zm5 17h-2v-2h2v2zm-1-4.5c-2.2 0-4.1-1.5-4.7-3.5h9.5c-.7 2-2.6 3.5-4.8 3.5zm5-5c0 .2 0 .3-.1.5H7.1c-.1-.2-.1-.3-.1-.5V8h10v2.5z' })
    )
  );
};

exports.default = Icon;