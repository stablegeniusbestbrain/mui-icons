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
      _react2.default.createElement('path', { d: 'M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12V4.5C2 3.1 3.1 2 4.5 2h15C20.9 2 22 3.1 22 4.5V12zm-6.1-3.8L12 12.1 8.1 8.2c-.6-.5-1.5-.5-2.1 0-.6.6-.6 1.6 0 2.2l4.9 4.9c.6.6 1.6.6 2.2 0l4.9-4.9c.6-.6.6-1.6 0-2.2-.6-.5-1.5-.5-2.1 0z' })
    )
  );
};

exports.default = Icon;