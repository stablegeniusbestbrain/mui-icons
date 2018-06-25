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
      _react2.default.createElement('path', { d: 'M22.7 12q1.3 0 2.1.9t.9 2.1v5.1q0 .2-.1.4t-.3.1H24v.8q0 1.1-.8 1.9t-1.8.7-1.8-.7-.7-1.9v-.8H5.1v.8q0 1.1-.7 1.9t-1.8.7-1.9-.7-.7-1.9v-.8h-1.3q-.2 0-.3-.1t-.1-.4V15q0-1.2.9-2.1t2.1-.9h.4l1.4-5.6q.3-1.3 1.4-2.1t2.4-.9h1.7v-3q0-.2.1-.3T9 0h6q.2 0 .3.1t.1.3v3h1.7q1.4 0 2.4.9t1.4 2.1l1.4 5.6h.4zM2.6 18.4q.9 0 1.5-.6t.6-1.5-.6-1.5-1.5-.7-1.5.7-.7 1.5.7 1.5 1.5.6zM5.2 12h13.6l-1.2-4.8q0-.1-.2-.2t-.3-.1H6.9q-.2 0-.3.1t-.2.2zm16.2 6.4q.9 0 1.5-.6t.7-1.5-.7-1.5-1.5-.7-1.5.7-.6 1.5.6 1.5 1.5.6z' })
    )
  );
};

exports.default = Icon;