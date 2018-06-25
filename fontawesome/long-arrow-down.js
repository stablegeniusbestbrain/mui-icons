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
      _react2.default.createElement('path', { d: 'M17.1 17.4q.1.3-.1.5L12.3 23q-.1.1-.3.1-.1 0-.3-.1L7 17.9q-.2-.2-.1-.5t.4-.3h3V.4q0-.2.1-.3t.3-.1h2.6q.2 0 .3.1t.1.3v16.7h3q.3 0 .4.3z' })
    )
  );
};

exports.default = Icon;