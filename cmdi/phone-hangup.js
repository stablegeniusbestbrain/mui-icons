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
      _react2.default.createElement('path', { d: 'M12 9c-1.6 0-3.2.3-4.6.7v3.1c0 .4-.2.8-.6.9-.9.5-1.8 1.1-2.6 1.9-.2.1-.5.3-.7.3-.3 0-.5-.2-.7-.3L.3 13.1c-.2-.2-.3-.4-.3-.7 0-.3.1-.6.3-.7C3.3 8.8 7.5 7 12 7s8.7 1.8 11.7 4.7c.2.2.3.4.3.7 0 .3-.1.5-.3.7l-2.5 2.5c-.1.1-.4.3-.7.3-.2 0-.5-.2-.7-.3-.8-.8-1.7-1.4-2.6-1.9-.4-.1-.6-.5-.6-.9V9.7c-1.4-.4-3-.7-4.6-.7z' })
    )
  );
};

exports.default = Icon;