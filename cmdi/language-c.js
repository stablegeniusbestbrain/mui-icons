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
      _react2.default.createElement('path', { d: 'M15.5 16l.4 2.4c-.3.1-.7.3-1.3.4-.5.1-1.2.2-2 .2-2.2 0-3.8-.7-5-2C6.5 15.8 6 14.2 6 12.2c0-2.3.7-4.1 2-5.3C9.3 5.6 10.9 5 12.9 5c.8 0 1.4.1 1.9.2s1 .2 1.2.4l-.6 2.5-1-.4c-.4-.1-.9-.1-1.4-.1-1.1 0-2.1.4-2.9 1.1C9.4 9.4 9 10.5 9 12c0 1.4.3 2.5 1 3.2.7.8 1.7 1.2 3 1.2l1.4-.1c.4-.1.8-.2 1.1-.3z' })
    )
  );
};

exports.default = Icon;