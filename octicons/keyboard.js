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
      _react2.default.createElement('path', { d: 'M15 7.5h-1.5V6H15v1.5zM4.5 9H3v1.5h1.5V9zM12 6h-1.5v1.5H12V6zM6 6H3v1.5h3V6zm12 10.5h3V15h-3v1.5zm-6-6h1.5V9H12v1.5zM6 15H3v1.5h3V15zm12-9h-1.5v1.5H18V6zm3 0h-1.5v1.5H21V6zm-3 7.5h3V9h-3v4.5zm6-9V18c0 .8-.7 1.5-1.5 1.5h-21C.7 19.5 0 18.8 0 18V4.5C0 3.7.7 3 1.5 3h21c.8 0 1.5.7 1.5 1.5zm-1.5 0h-21V18h21V4.5zM9 10.5h1.5V9H9v1.5zM9 6H7.5v1.5H9V6zm-3 4.5h1.5V9H6v1.5zm1.5 6h9V15h-9v1.5zm7.5-6h1.5V9H15v1.5zM4.5 12H3v1.5h1.5V12zm7.5 0v1.5h1.5V12H12zm-3 0v1.5h1.5V12H9zm-1.5 0H6v1.5h1.5V12zm7.5 1.5h1.5V12H15v1.5z' })
    )
  );
};

exports.default = Icon;