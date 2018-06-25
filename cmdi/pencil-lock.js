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
      _react2.default.createElement('path', { d: 'M5.5 2C4.1 2 3 3.1 3 4.5V5c-.5 0-1 .5-1 1v4c0 .6.5 1 1 1h5c.6 0 1-.4 1-1V6c0-.5-.4-1-1-1v-.5C8 3.1 6.9 2 5.5 2zm0 1C6.3 3 7 3.7 7 4.5V5H4v-.5C4 3.7 4.7 3 5.5 3zm14.2 0c-.3 0-.5.1-.7.3l-1.9 1.8 3.8 3.8L22.7 7c.4-.4.4-1 0-1.4l-2.3-2.3c-.2-.2-.5-.3-.7-.3zm-3.6 3.2L5 17.3V21h3.8l11-11.1-3.7-3.7z' })
    )
  );
};

exports.default = Icon;