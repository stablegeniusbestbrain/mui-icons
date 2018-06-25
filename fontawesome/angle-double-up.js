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
      _react2.default.createElement('path', { d: 'M18.7 17.6q0 .1-.2.3l-.6.6q-.2.2-.3.2t-.3-.2L12 13.3l-5.3 5.2q-.1.2-.3.2t-.3-.2l-.6-.6q-.2-.2-.2-.3t.2-.3l6.2-6.3q.1-.1.3-.1t.3.1l6.2 6.3q.2.1.2.3zm0-5.2q0 .2-.2.3l-.6.7q-.2.1-.3.1t-.3-.1L12 8.1l-5.3 5.3q-.1.1-.3.1t-.3-.1l-.6-.7q-.2-.1-.2-.3t.2-.3l6.2-6.2q.1-.2.3-.2t.3.2l6.2 6.2q.2.2.2.3z' })
    )
  );
};

exports.default = Icon;