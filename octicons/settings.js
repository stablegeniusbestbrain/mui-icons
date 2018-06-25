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
      _react2.default.createElement('path', { d: 'M6 10.5H4.5V3H6v7.5zM4.5 21H6v-4.5H4.5V21zm7.5 0h1.5v-9H12v9zm7.5 0H21v-3h-1.5v3zM21 3h-1.5v9H21V3zm-7.5 0H12v3h1.5V3zm-6 9H3c-.8 0-1.5.7-1.5 1.5S2.2 15 3 15h4.5c.8 0 1.5-.7 1.5-1.5S8.3 12 7.5 12zM15 7.5h-4.5C9.7 7.5 9 8.2 9 9s.7 1.5 1.5 1.5H15c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5zm7.5 6H18c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h4.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z' })
    )
  );
};

exports.default = Icon;