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
      _react2.default.createElement('path', { d: 'M20.6 1.7q0 3.5-1.5 6.2T15.6 12q2.1 1.4 3.5 4.1t1.5 6.2h1.3q.1 0 .3.1t.1.3v.9q0 .2-.1.3t-.3.1H2.1q-.1 0-.3-.1t-.1-.3v-.9q0-.2.1-.3t.3-.1h1.3q0-3.5 1.5-6.2T8.4 12q-2.1-1.4-3.5-4.1T3.4 1.7H2.1q-.1 0-.3-.1t-.1-.3V.4q0-.2.1-.3t.3-.1h19.8q.1 0 .3.1t.1.3v.9q0 .2-.1.3t-.3.1h-1.3zm-1.7 0H5.1q0 2.8 1.2 5.2h11.4q1.2-2.4 1.2-5.2zM18.1 18q-.7-1.9-2-3.2t-2.6-1.9h-3q-1.4.5-2.6 1.9t-2 3.2h12.2z' })
    )
  );
};

exports.default = Icon;