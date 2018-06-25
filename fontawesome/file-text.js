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
      _react2.default.createElement('path', { d: 'M21.4 6.4q.2.2.4.5h-6.4V.5q.3.2.5.4zM15 8.6h7.3v14.1q0 .6-.4.9t-.9.4H3q-.5 0-.9-.4t-.4-.9V1.3q0-.6.4-.9T3 0h10.7v7.3q0 .5.4.9t.9.4zm2.1 9.8v-.8q0-.2-.1-.3t-.3-.2H7.3q-.2 0-.3.2t-.1.3v.8q0 .2.1.3t.3.2h9.4q.2 0 .3-.2t.1-.3zm0-3.4v-.9q0-.1-.1-.3t-.3-.1H7.3q-.2 0-.3.1t-.1.3v.9q0 .2.1.3t.3.1h9.4q.2 0 .3-.1t.1-.3zm0-3.4v-.9q0-.2-.1-.3t-.3-.1H7.3q-.2 0-.3.1t-.1.3v.9q0 .2.1.3t.3.1h9.4q.2 0 .3-.1t.1-.3z' })
    )
  );
};

exports.default = Icon;