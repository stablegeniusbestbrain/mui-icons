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
      _react2.default.createElement('path', { d: 'M21 9v6c0 3.3-2.7 6-6 6H4.4l6.7-6.7c.3-.3.6-.6.7-.5.2 0 .2.3.2.7V17h2c1.7 0 3-1.3 3-3V8.4l4-4V9zM3 15V9c0-3.3 2.7-6 6-6h10.6l-6.7 6.7c-.3.3-.6.6-.7.5-.2 0-.2-.3-.2-.7V7h-2c-1.7 0-3 1.3-3 3v5.6l-4 4V15z' })
    )
  );
};

exports.default = Icon;