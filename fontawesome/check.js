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
      _react2.default.createElement('path', { d: 'M22.4 7.6q0 .5-.4.9l-9.7 9.7-1.8 1.8q-.4.4-.9.4t-.9-.4l-1.9-1.8L2 13.3q-.4-.3-.4-.9t.4-.9l1.8-1.8q.4-.4.9-.4t.9.4l4 3.9 8.8-8.8q.3-.3.9-.3t.9.3L22 6.7q.4.3.4.9z' })
    )
  );
};

exports.default = Icon;