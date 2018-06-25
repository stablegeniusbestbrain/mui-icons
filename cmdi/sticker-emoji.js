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
      _react2.default.createElement('path', { d: 'M5.5 2C3.6 2 2 3.6 2 5.5v13C2 20.4 3.6 22 5.5 22H16l6-6V5.5C22 3.6 20.4 2 18.5 2h-13zm.3 2h12.5c.9 0 1.7.8 1.7 1.8V15h-1.5c-1.9 0-3.5 1.6-3.5 3.5V20H5.8c-1 0-1.8-.8-1.8-1.7V5.8C4 4.8 4.8 4 5.8 4zm8.6 2.8H14C13 7.1 12.5 8 12.7 9c.1.1.2.3.2.4l3.3-.8c0-.2 0-.4-.1-.5-.2-.8-.9-1.3-1.7-1.3zM8.2 8.5c-.2 0-.3 0-.5.1-.9.2-1.5 1.2-1.2 2.1 0 .2.1.3.2.5l3.2-.9c0-.2 0-.4-.1-.5C9.6 9 9 8.5 8.2 8.5zm8.5 2.8l-9.1 2.5c1.3 1.5 3.4 2.1 5.3 1.6 2-.5 3.5-2.1 3.8-4.1z' })
    )
  );
};

exports.default = Icon;