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
      _react2.default.createElement('path', { d: 'M5.3 5.6c-.9-.6-1.1-1.8-.4-2.8.6-.9 1.8-1.1 2.7-.4.9.6 1.2 1.8.5 2.7-.6.9-1.8 1.2-2.8.5zM16 19H8.9c-1.5 0-2.7-1.1-2.9-2.5L4 7H2l2 9.8c.4 2.4 2.5 4.2 4.9 4.2H16m.2-6h-4.9l-1-4.1c1.6.9 3.3 1.5 5.2 1.2V10c-1.7.3-3.5-.3-4.7-1.3L9.1 7.5c-.2-.2-.4-.3-.7-.4-.3-.1-.7-.1-1-.1-1.3.3-2.1 1.4-1.9 2.6l1.4 6C7.2 17 8.4 18 9.8 18h6.9l3.8 3 1.5-1.5' })
    )
  );
};

exports.default = Icon;