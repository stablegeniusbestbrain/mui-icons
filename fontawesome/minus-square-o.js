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
      _react2.default.createElement('path', { d: 'M18 10.7v.9q0 .2-.1.3t-.3.1H6.4q-.2 0-.3-.1t-.1-.3v-.9q0-.2.1-.3t.3-.1h11.2q.2 0 .3.1t.1.3zm1.7 6V5.6q0-.9-.6-1.5t-1.5-.7H6.4q-.9 0-1.5.7t-.6 1.5v11.1q0 .9.6 1.5t1.5.7h11.2q.9 0 1.5-.7t.6-1.5zm1.7-11.1v11.1q0 1.6-1.1 2.7t-2.7 1.2H6.4q-1.6 0-2.7-1.2t-1.1-2.7V5.6q0-1.6 1.1-2.8t2.7-1.1h11.2q1.6 0 2.7 1.1t1.1 2.8z' })
    )
  );
};

exports.default = Icon;