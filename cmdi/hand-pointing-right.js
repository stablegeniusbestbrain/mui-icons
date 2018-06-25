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
      _react2.default.createElement('path', { d: 'M21 9c.6 0 1 .4 1 1s-.4 1-1 1h-4.5l-.1 1.2-2.2 4.9c-.2.5-.7.9-1.3.9H8.5c-.8 0-1.5-.7-1.5-1.5V10c0-.4.2-.7.4-1l4.2-4.9.8.7c.2.2.3.5.3.8v.2L11 9h10zM2 18v-8h3v8H2z' })
    )
  );
};

exports.default = Icon;