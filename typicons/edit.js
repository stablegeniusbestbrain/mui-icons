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
      _react2.default.createElement('path', { d: 'M21.6 5.3l-2.9-2.9c-.3-.3-.7-.4-1.1-.4-.4 0-.7.1-1 .4L13 6H4c-.6 0-1 .4-1 1v13c0 .6.4 1 1 1h13c.6 0 1-.4 1-1v-9l3.6-3.6c.3-.3.4-.6.4-1s-.1-.8-.4-1.1zm-10.1 9.4l-2.2-2.2 6.3-6.3 2.2 2.2-6.3 6.3zm-2.6-1.4l1.8 1.8L9 15l-.1-1.7zM16 19H5V8h6l-3.2 3.2c-.3.3-.5.8-.6 1.3-.2.5-.2 1-.2 1.4V17h3.1c.4 0 1.1-.1 1.5-.3.5-.2.9-.3 1.2-.6L16 13v6zm2.5-11.3l-2.2-2.2 1.3-1.3 2.2 2.2-1.3 1.3z' })
    )
  );
};

exports.default = Icon;