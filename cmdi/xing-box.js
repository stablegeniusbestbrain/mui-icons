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
      _react2.default.createElement('path', { d: 'M4.8 3C3.8 3 3 3.8 3 4.8v14.4c0 1 .8 1.8 1.8 1.8h14.4c1 0 1.8-.8 1.8-1.8V4.8c0-1-.8-1.8-1.8-1.8m-3.1 2h2c.1 0 .2 0 .3.1v.3l-4.5 8 2.8 5.2c.1.1.1.2.1.3-.1.1-.2.1-.3.1h-2c-.3 0-.5-.2-.6-.4L11 13.3l4.5-7.9c.1-.2.3-.4.6-.4zm-9 2.8h2c.3 0 .5.2.6.3l1.4 2.5c-.1.1-2.2 3.8-2.2 3.8-.1.2-.3.4-.6.4h-2c-.1 0-.2 0-.3-.1v-.3l2.2-3.8-1.4-2.4v-.3c.1-.1.2-.1.3-.1z' })
    )
  );
};

exports.default = Icon;