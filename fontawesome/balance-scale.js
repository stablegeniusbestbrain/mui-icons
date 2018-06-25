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
      _react2.default.createElement('path', { d: 'M19.7 6l-5.1 9.4h10.3zM2.6 6l-5.2 9.4H7.7zm11-2.6q-.2.6-.6 1T12 5v17.3h8.1q.2 0 .4.1t.1.3v.9q0 .2-.1.3t-.4.1h-18q-.1 0-.3-.1t-.1-.3v-.9q0-.2.1-.3t.3-.1h8.2V5q-.6-.2-1-.6t-.6-1H2.1q-.1 0-.3-.1T1.7 3v-.9q0-.1.1-.3t.3-.1h6.6Q9 1 9.7.5t1.4-.5 1.5.5 1 1.2h6.5q.2 0 .4.1t.1.3V3q0 .2-.1.3t-.4.1h-6.5zm-2.5.2q.5 0 .8-.3t.3-.7-.3-.8-.8-.3-.7.3-.3.8.3.7.7.3zm14.6 11.8q0 1-.6 1.8t-1.6 1.2-1.9.7-1.9.2-1.9-.2-1.9-.7-1.6-1.2-.6-1.8q0-.1.5-1.1t1.2-2.3 1.4-2.6 1.4-2.5.8-1.3q.2-.5.7-.5t.8.5q0 .1.7 1.3t1.4 2.5T24 12t1.2 2.3.5 1.1zm-17.1 0q0 1-.7 1.8t-1.5 1.2-2 .7-1.8.2-1.9-.2-1.9-.7-1.6-1.2-.6-1.8q0-.1.4-1.1t1.3-2.3 1.4-2.6 1.4-2.5.7-1.3q.3-.5.8-.5t.7.5q.1.1.8 1.3t1.3 2.5T6.9 12t1.2 2.3.5 1.1z' })
    )
  );
};

exports.default = Icon;