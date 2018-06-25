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
      _react2.default.createElement('path', { d: 'M6.9 16L8 12H5.8l1 4q.1 0 .1.1t0-.1zm1.5-5.7l.5-1.7H5l.4 1.7h3zm2.6 0h1.9l-.5-1.7h-.9zm6 5.7l1.1-4h-2.2l1.1 4v.1q0 .1 0 0t0-.1zm1.5-5.7l.5-1.7h-4l.4 1.7h3.1zm5.5.4v.9q0 .2-.1.3t-.3.1h-2.9l-2.2 8.3q-.1.3-.4.3H16q-.3 0-.4-.3L13.3 12h-2.8l-2.2 8.3q-.1.3-.4.3H5.8q-.2 0-.3-.1t-.1-.2L3.2 12H.4q-.2 0-.3-.1t-.1-.3v-.9q0-.2.1-.3t.3-.1h2.4l-.5-1.7H.4q-.2 0-.3-.1T0 8.1v-.8q0-.2.1-.3t.3-.1h1.5L.7 2.3q-.1-.3.1-.4.1-.2.3-.2h1.8q.4 0 .5.3l1.2 4.9h4.8L10.7 2q.1-.3.4-.3h1.7q.3 0 .4.3l1.3 4.9h4.9L20.6 2q.1-.3.5-.3h1.8q.2 0 .3.2.2.1.1.4l-1.2 4.6h1.5q.2 0 .3.1t.1.3v.8q0 .2-.1.4t-.3.1h-2l-.4 1.7h2.4q.2 0 .3.1t.1.3z' })
    )
  );
};

exports.default = Icon;