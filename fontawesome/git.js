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
      _react2.default.createElement('path', { d: 'M8 20.3q0-1.4-2.2-1.4t-2.2 1.4q0 1.4 2.3 1.4 2.1 0 2.1-1.4zm-.8-10.1q0-.9-.4-1.4t-1.2-.6q-1.7 0-1.7 2 0 1.8 1.7 1.8 1.6 0 1.6-1.8zm3.6-4.4v2.7q-.5.2-1.1.3.2.6.2 1.2 0 1.7-.9 2.9t-2.7 1.5q-.5.1-.8.3t-.2.8q0 .4.3.7t.7.4 1.1.3 1.1.3 1.1.6.8.8.3 1.3q0 4.1-4.9 4.1-.9 0-1.7-.2t-1.6-.5-1.2-1.1-.4-1.7q0-2.2 2.4-3v-.1q-.8-.5-.8-1.7 0-1.4.8-1.8v-.1q-1-.3-1.6-1.4t-.6-2.2q0-1.9 1.2-3.1t3.2-1.3q1.3 0 2.4.7 1.3 0 2.9-.7zM15 17.6h-2.9V7.7 6H15v11.6zm8.1-2.9v2.6q-1 .5-2.3.5-.9 0-1.5-.3t-.9-.6-.5-1.1-.3-1.2 0-1.4V8.5q-.1 0-.3-.1t-.2 0q-.3 0-.8.1V6h1.3V4.9q0-.7-.1-1.2h3V6h2.3v2.5h-2.3v4.8q0 1.8 1.1 1.8.8 0 1.5-.4zM15.4 2q0 .7-.5 1.3t-1.3.6q-.8 0-1.3-.6T11.7 2q0-.8.5-1.4t1.4-.6q.7 0 1.3.6t.5 1.4z' })
    )
  );
};

exports.default = Icon;