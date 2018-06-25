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
      _react2.default.createElement('path', { d: 'M16.7 4.3c-.4-.4-1-.4-1.4 0-.1.1-.2.2-.2.3-.8 1.8-1.8 2.7-2.9 3.3C10.9 8.6 9.4 9 7 9c-.1 0-.3 0-.4.1-.2.1-.4.3-.5.5-.1.3-.1.5 0 .8 0 .1.1.2.2.3L9.5 14 5 20l6.1-4.5 3.2 3.2c.1.1.2.2.3.2.1.1.3.1.4.1s.3 0 .4-.1c.2-.1.4-.3.5-.5.1-.1.1-.3.1-.4 0-2.4.4-3.9 1.1-5.2.6-1.1 1.5-2 3.3-2.9.1 0 .2-.1.3-.2.4-.4.4-1 0-1.4l-4-4z' })
    )
  );
};

exports.default = Icon;