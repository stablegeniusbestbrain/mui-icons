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
      _react2.default.createElement('path', { d: 'M18.8 8.1q-.3.5-.8.5h-2.6v11.5q0 .2-.1.4t-.3.1H5.6q-.3 0-.4-.3-.1-.2 0-.4l2.2-2.6q.1-.2.3-.2H12V8.6H9.4q-.5 0-.7-.5-.3-.5.1-.9L13.1 2q.2-.3.6-.3t.7.3l4.3 5.2q.3.4.1.9z' })
    )
  );
};

exports.default = Icon;