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
      _react2.default.createElement('path', { d: 'M17.5 12l-4.2-2.4 2.1-5.2c.1-.1.1-.2.1-.4 0-.6-.4-1-1-1-.2 0-.5.1-.6.2l-.1.1-7.5 7.1c-.2.2-.3.5-.3.8 0 .3.2.6.5.8l4.2 2.4-2.1 5.2c-.2.5-.1 1 .3 1.2.2.1.4.2.6.2.2 0 .5-.1.7-.3l7.5-7.1c.2-.2.3-.5.3-.8 0-.3-.2-.6-.5-.8z' })
    )
  );
};

exports.default = Icon;