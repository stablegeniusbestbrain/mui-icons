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
      _react2.default.createElement('path', { d: 'M21 3h-1.5v2.3c0 .4-.3.7-.7.7h-3c-.5 0-.8-.3-.8-.7V3h-4.5v2.3c0 .4-.3.7-.7.7h-3c-.5 0-.8-.3-.8-.7V3H4.5C3.7 3 3 3.7 3 4.5V21c0 .8.7 1.5 1.5 1.5H21c.8 0 1.5-.7 1.5-1.5V4.5c0-.8-.7-1.5-1.5-1.5zm0 18H4.5V7.5H21V21zM9 4.5H7.5v-3H9v3zm9 0h-1.5v-3H18v3zm-7.5 6H9V9h1.5v1.5zm3 0H12V9h1.5v1.5zm3 0H15V9h1.5v1.5zm3 0H18V9h1.5v1.5zm-12 3H6V12h1.5v1.5zm3 0H9V12h1.5v1.5zm3 0H12V12h1.5v1.5zm3 0H15V12h1.5v1.5zm3 0H18V12h1.5v1.5zm-12 3H6V15h1.5v1.5zm3 0H9V15h1.5v1.5zm3 0H12V15h1.5v1.5zm3 0H15V15h1.5v1.5zm3 0H18V15h1.5v1.5zm-12 3H6V18h1.5v1.5zm3 0H9V18h1.5v1.5zm3 0H12V18h1.5v1.5zm3 0H15V18h1.5v1.5z' })
    )
  );
};

exports.default = Icon;