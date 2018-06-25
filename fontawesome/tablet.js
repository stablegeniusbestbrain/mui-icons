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
      _react2.default.createElement('path', { d: 'M12.9 18.9q0-.4-.3-.6T12 18t-.6.3-.3.6.3.6.6.2.6-.2.3-.6zm5.1-2.2V3.9q0-.2-.1-.3t-.3-.2H6.4q-.1 0-.3.2t-.1.3v12.8q0 .2.1.3t.3.1h11.2q.1 0 .3-.1t.1-.3zm1.7-12.8v14.5q0 .9-.6 1.5t-1.5.7H6.4q-.9 0-1.5-.7t-.6-1.5V3.9q0-.9.6-1.6t1.5-.6h11.2q.9 0 1.5.6t.6 1.6z' })
    )
  );
};

exports.default = Icon;