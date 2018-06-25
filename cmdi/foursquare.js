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
      _react2.default.createElement('path', { d: 'M17 5l-.4 2.5c-.1.2-.4.5-.7.5H12c-.5 0-1.1.3-1.1.8v.4c0 .5.6.8 1.1.8h3.3c.3 0 .6.4.6.7-.1.4-1 2.6-1 2.8 0 .2-.3.5-.7.5h-2.8c-.6 0-.7.1-1.1.5-.3.4-3 3.6-3 3.6-.1 0-.3-.1-.3-.1V5c0-.3.6-1 1-1h8.5c.3 0 .6.6.5 1zm0 9.4c.1-.4 1.8-7.7 2.2-9.9M17.6 2H6.9C5.4 2 5 3.1 5 3.8v17c0 .7.4 1 .7 1.1.2.1.8.2 1.2-.2 0 0 4.8-5.5 4.8-5.6.2-.1.2-.1.3-.1h3.3c1.3 0 1.6-1 1.7-1.6.1-.4 1.8-7.7 2.2-9.9.4-1.6-.1-2.5-1.6-2.5z' })
    )
  );
};

exports.default = Icon;