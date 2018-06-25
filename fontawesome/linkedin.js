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
      _react2.default.createElement('path', { d: 'M6.4 8.4v13.2H2V8.4h4.4zm.3-4.1q0 .9-.7 1.6t-1.8.7q-1.1 0-1.8-.7t-.7-1.6q0-1 .7-1.7T4.2 2t1.8.6.7 1.7zM22.3 14v7.6h-4.4v-7.1q0-1.4-.6-2.2t-1.7-.8q-.8 0-1.4.5t-.8 1.2q-.2.4-.2 1v7.4H8.8q.1-5.3.1-8.6t-.1-4v-.6h4.4v1.9l.6-.8q.3-.4.7-.6t1.2-.6 1.5-.2q2.3 0 3.7 1.5t1.4 4.4z' })
    )
  );
};

exports.default = Icon;