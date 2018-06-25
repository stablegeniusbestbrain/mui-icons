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
      _react2.default.createElement('path', { d: 'M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-9.8-3.2v-.2l.9-1.6h7.5c.7 0 1.4-.4 1.7-1l3.9-7-1.8-1-1.1 2-2.8 5h-7l-.1-.3L6.2 6l-1-2-.9-2H1v2h2l3.6 7.6L5.3 14c-.2.3-.3.6-.3 1 0 1.1.9 2 2 2h12v-2H7.4c-.1 0-.2-.1-.2-.2z' })
    )
  );
};

exports.default = Icon;