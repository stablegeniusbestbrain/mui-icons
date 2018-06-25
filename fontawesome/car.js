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
      _react2.default.createElement('path', { d: 'M4.7 14.6q0-.9-.6-1.5t-1.5-.7-1.5.7-.7 1.5.7 1.5 1.5.6 1.5-.6.6-1.5zm.5-4.3h13.6l-1.2-4.8q0-.1-.2-.2t-.3-.2H6.9q-.2 0-.3.2t-.2.2zm18.4 4.3q0-.9-.7-1.5t-1.5-.7-1.5.7-.6 1.5.6 1.5 1.5.6 1.5-.6.7-1.5zm2.1-1.3v5.1q0 .2-.1.3t-.3.2H24v1.7q0 1-.8 1.8t-1.8.7-1.8-.7-.7-1.8v-1.7H5.1v1.7q0 1-.7 1.8t-1.8.7-1.9-.7-.7-1.8v-1.7h-1.3q-.2 0-.3-.2t-.1-.3v-5.1q0-1.3.9-2.1t2.1-.9h.4l1.4-5.6q.3-1.3 1.4-2.1t2.4-.9h10.2q1.4 0 2.4.9t1.4 2.1l1.4 5.6h.4q1.3 0 2.1.9t.9 2.1z' })
    )
  );
};

exports.default = Icon;