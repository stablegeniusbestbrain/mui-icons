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
      _react2.default.createElement('path', { d: 'M13.5 13.5H12c.8 0 1.5-.7 1.5-1.5v-1.5c0-.8-.7-1.5-1.5-1.5h-1.5C9.7 9 9 9.7 9 10.5V12c0 .8.7 1.5 1.5 1.5H9c-.8 0-1.5.7-1.5 1.5v3H9v4.5c0 .8.7 1.5 1.5 1.5H12c.8 0 1.5-.7 1.5-1.5V18H15v-3c0-.8-.7-1.5-1.5-1.5zm-3-3H12V12h-1.5v-1.5zm3 6H12v6h-1.5v-6H9V15h4.5v1.5zm3.1-5.2c0-3-2.4-5.4-5.4-5.4A5.4 5.4 0 0 0 6 12.5v2.9c-.9-1.1-1.5-2.6-1.5-4.2 0-3.7 3-6.7 6.8-6.7s6.7 3 6.7 6.7c0 1.6-.6 3.1-1.5 4.2v-2.9c.1-.4.1-.8.1-1.2zm5.9 0c0 4.3-2.4 8-6 9.9v-1.6a9.8 9.8 0 0 0 4.6-8.3 9.9 9.9 0 0 0-9.8-9.9 9.9 9.9 0 0 0-9.9 9.9c0 3.5 1.8 6.6 4.6 8.3v1.6A11.2 11.2 0 0 1 11.3 0c6.2 0 11.2 5 11.2 11.3z' })
    )
  );
};

exports.default = Icon;