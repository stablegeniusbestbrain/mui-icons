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
      _react2.default.createElement('path', { d: 'M15.7 12.9q0 .1-.2.3l-6.2 6.2q-.1.1-.3.1t-.3-.1l-.7-.7q-.1-.1-.1-.3t.1-.3l5.3-5.2L8 7.6q-.1-.1-.1-.3T8 7l.7-.7q.1-.1.3-.1t.3.1l6.2 6.2q.2.2.2.4z' })
    )
  );
};

exports.default = Icon;