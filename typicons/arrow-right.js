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
      _react2.default.createElement('path', { d: 'M13.3 7.3c-.4.4-.4 1 0 1.4l2.3 2.3H8c-.6 0-1 .4-1 1s.4 1 1 1h7.6l-2.3 2.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3l4.7-4.7-4.7-4.7c-.4-.4-1-.4-1.4 0z' })
    )
  );
};

exports.default = Icon;