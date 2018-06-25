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
      _react2.default.createElement('path', { d: 'M14 13.3L13.7 9q0-.2-.1-.3t-.4-.1h-2.4q-.2 0-.4.1t-.1.3l-.3 4.3q0 .2.1.3t.3.1h3.2q.2 0 .3-.1t.1-.3zm10.2 6.3q0 1-.6 1h-9.5q.2 0 .3-.2t.1-.3l-.2-3.4q0-.2-.2-.3t-.3-.1h-3.6q-.2 0-.3.1t-.2.3l-.2 3.4q-.1.2.1.3t.3.2H.4q-.6 0-.6-1 0-.7.4-1.6L5.7 4.1q.2-.3.4-.5t.5-.2h4.5q-.1 0-.3.2t-.1.3l-.2 2.5q0 .2.1.3t.3.2h2.2q.2 0 .3-.2t.1-.3l-.2-2.5q0-.2-.1-.3t-.3-.2h4.5q.3 0 .5.2t.4.5L23.8 18q.4.9.4 1.6z' })
    )
  );
};

exports.default = Icon;