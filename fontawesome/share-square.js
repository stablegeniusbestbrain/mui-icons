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
      _react2.default.createElement('path', { d: 'M15.2 14.7l4.7-4.7q.2-.2.2-.6t-.2-.6l-4.7-4.7q-.4-.4-.9-.2-.6.3-.6.8v2.2q-1.6 0-2.9.2t-2.2.7-1.5 1.1-1 1.2-.6 1.5-.3 1.5-.1 1.5q0 2.4 2.3 5.4.1.1.3.1h.2q.3-.1.2-.4-.5-4.8.9-6.4.6-.7 1.7-1t3-.3v2.1q0 .6.6.8.1.1.3.1.3 0 .6-.3zm7.1-9.1v12.8q0 1.6-1.1 2.8t-2.8 1.1H5.6q-1.6 0-2.8-1.1t-1.1-2.8V5.6q0-1.6 1.1-2.8t2.8-1.1h12.8q1.6 0 2.8 1.1t1.1 2.8z' })
    )
  );
};

exports.default = Icon;