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
      _react2.default.createElement('path', { d: 'M12.9 3.4q0-.3-.3-.6t-.6-.2-.6.2-.3.6.3.6.6.3.6-.3.3-.6zM24 15.9v4.7q0 .3-.3.4h-.1q-.2 0-.3-.1L22 19.6q-1.6 1.9-4.2 3.1T12 23.8t-5.8-1.1T2 19.6L.7 20.9q-.1.1-.3.1H.3q-.3-.1-.3-.4v-4.7q0-.2.1-.4t.3-.1h4.7q.3 0 .4.3.2.3 0 .5l-1.4 1.3q.9 1.2 2.5 2.1t3.7 1.1V12H7.7q-.3 0-.6-.3t-.2-.6V9.4q0-.3.2-.6t.6-.2h2.6V6.4Q9.5 5.9 9 5.1t-.4-1.7q0-1.4 1-2.4T12 0t2.4 1 1 2.4q0 1-.4 1.7t-1.3 1.3v2.2h2.6q.3 0 .6.2t.2.6v1.7q0 .4-.2.6t-.6.3h-2.6v8.7q2-.3 3.7-1.1t2.5-2.1l-1.4-1.3q-.2-.2 0-.5.1-.3.4-.3h4.7q.2 0 .3.1t.1.4z' })
    )
  );
};

exports.default = Icon;