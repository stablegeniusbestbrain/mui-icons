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
      _react2.default.createElement('path', { d: 'M20.1 6q0-.5-.3-.9t-.9-.4-1 .4-.3.9.3.9 1 .4.9-.4.3-.9zm3-3.9q0 3.4-1 5.8t-3.4 4.8q-1 1.1-2.6 2.4l-.2 5.1q-.1.2-.3.3l-5.1 3q-.1.1-.2.1-.2 0-.3-.1l-.9-.9q-.2-.2-.1-.4l1.2-3.7-3.8-3.8-3.7 1.1q0 .1-.1.1-.2 0-.3-.2l-.9-.8q-.2-.3-.1-.5l3-5.2q.2-.2.4-.2l5.1-.3q1.2-1.5 2.3-2.6 2.5-2.5 4.8-3.4t5.8-1q.2 0 .3.1t.1.3z' })
    )
  );
};

exports.default = Icon;