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
      _react2.default.createElement('path', { d: 'M13.5 7.5H12V6h1.5v1.5zm6 4.5H18v1.5h1.5V12zM9 7.5H7.5V9H9V7.5zM7.5 12H6v1.5h1.5V12zM24 3.8l-.7-.8-9.8 7.5H12c-.8 0-1.5.7-1.5 1.5v1.5c0 .8.7 1.5 1.5 1.5h1.5c.8 0 1.5-.7 1.5-1.5v-1.4l9-8.4zm-2.4 6.1c.3.9.5 1.9.5 2.9 0 5.1-4.2 9.3-9.3 9.3-5.2 0-9.4-4.2-9.4-9.3 0-5.2 4.2-9.4 9.3-9.4 1.8 0 3.5.6 5 1.5l1.4-1.5a11.2 11.2 0 0 0-6.3-1.9c-6.3 0-11.3 5-11.3 11.3C1.5 19 6.5 24 12.8 24 19 24 24 19 24 12.8c0-1.6-.3-3.1-.9-4.4l-1.5 1.5z' })
    )
  );
};

exports.default = Icon;