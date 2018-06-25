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
      _react2.default.createElement('path', { d: 'M22.5 0h-9v10.5c0 .8.7 1.5 1.5 1.5h1.5v1.5H18V12h4.5c.8 0 1.5-.7 1.5-1.5v-9c0-.8-.7-1.5-1.5-1.5zm-6 10.5H15V9h1.5v1.5zm6 0H18V9h4.5v1.5zm0-3h-6v-6h6v6zM6 7.5H4.5V6H6v1.5zm0-3H4.5V3H6v1.5zm-3-3h9V0H1.5C.7 0 0 .7 0 1.5v18c0 .8.7 1.5 1.5 1.5h3v3l2.3-2.2L9 24v-3h7.5c.8 0 1.5-.7 1.5-1.5V15H3V1.5zm13.5 15v3H9V18H4.5v1.5h-3v-3h15zM4.5 12H6v1.5H4.5V12zM6 10.5H4.5V9H6v1.5z' })
    )
  );
};

exports.default = Icon;