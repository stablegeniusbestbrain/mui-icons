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
      _react2.default.createElement('path', { d: 'M17 9h-.4c-.8-2.4-3-4-5.6-4-3.3 0-6 2.7-6 6v.1c-1.7.5-3 2-3 3.9 0 2.2 1.8 4 4 4h5v-4.6l-1.3 1.3c-.2.2-.4.3-.7.3s-.5-.1-.7-.3c-.4-.4-.4-1 0-1.4l3-3c.1-.1.2-.2.3-.2.3-.1.5-.1.8 0 .1 0 .2.1.3.2l3 3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3s-.5-.1-.7-.3L13 14.4V19h4c2.8 0 5-2.2 5-5s-2.2-5-5-5z' })
    )
  );
};

exports.default = Icon;