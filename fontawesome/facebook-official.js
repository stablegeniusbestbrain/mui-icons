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
      _react2.default.createElement('path', { d: 'M21.1 1.7q.5 0 .9.3t.3.9v18.2q0 .5-.3.9t-.9.3h-5.2v-8h2.7l.4-3.1h-3.1v-2q0-.7.3-1.1t1.3-.4h1.6V4.9q-.9-.1-2.4-.1-1.8 0-2.9 1.1t-1.1 3v2.3H10v3.1h2.7v8H2.9q-.5 0-.9-.3t-.3-.9V2.9q0-.5.3-.9t.9-.3h18.2z' })
    )
  );
};

exports.default = Icon;