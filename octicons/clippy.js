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
      _react2.default.createElement('path', { d: 'M4.5 19.5h6V21h-6v-1.5zm7.5-9H4.5V12H12v-1.5zm3 4.5v-3l-4.5 4.5L15 21v-3h7.5v-3H15zm-6.7-1.5H4.5V15h3.8v-1.5zM4.5 18h3.8v-1.5H4.5V18zM18 19.5h1.5v3c0 .4-.2.8-.4 1.1-.3.2-.7.4-1.1.4H3c-.8 0-1.5-.7-1.5-1.5V6c0-.8.7-1.5 1.5-1.5h4.5c0-1.7 1.3-3 3-3s3 1.3 3 3H18c.8 0 1.5.7 1.5 1.5v7.5H18V9H3v13.5h15v-3zM4.5 7.5h12c0-.8-.7-1.5-1.5-1.5h-1.5c-.8 0-1.5-.7-1.5-1.5S11.3 3 10.5 3 9 3.7 9 4.5 8.3 6 7.5 6H6c-.8 0-1.5.7-1.5 1.5z' })
    )
  );
};

exports.default = Icon;