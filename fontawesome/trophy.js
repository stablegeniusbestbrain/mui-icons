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
      _react2.default.createElement('path', { d: 'M7 11.8Q6 9.7 6 6.9H2.6v1.2q0 1.1 1.2 2.2T7 11.8zm14.4-3.7V6.9H18q0 2.8-1 4.9 1.9-.4 3.2-1.5t1.2-2.2zm1.7-1.7v1.7q0 1-.5 2t-1.5 1.7-2.3 1.3-2.9.6q-.6.7-1.3 1.3-.5.4-.7.9t-.2 1.2q0 .8.4 1.3t1.3.5q1 0 1.8.6T18 21v.9q0 .1-.1.3t-.3.1H6.4q-.2 0-.3-.1t-.1-.3V21q0-.9.8-1.5t1.8-.6q.9 0 1.3-.5t.4-1.3q0-.6-.2-1.2t-.7-.9q-.7-.6-1.3-1.3-1.5-.1-2.9-.6t-2.3-1.3-1.5-1.7-.5-2V6.4q0-.5.3-.9t.9-.4H6V3.9q0-.9.6-1.6t1.5-.6h7.8q.8 0 1.5.6t.6 1.6v1.2h3.9q.5 0 .9.4t.3.9z' })
    )
  );
};

exports.default = Icon;