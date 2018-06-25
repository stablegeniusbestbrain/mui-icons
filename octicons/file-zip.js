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
      _react2.default.createElement('path', { d: 'M15.8 1.5H4.5A1.5 1.5 0 0 0 3 3v18a1.5 1.5 0 0 0 1.5 1.5h15A1.5 1.5 0 0 0 21 21V6.8l-5.2-5.3zM19.5 21h-15V3H9v1.5h1.5V3H15l4.5 4.5V21zm-9-15V4.5H12V6h-1.5zM9 6h1.5v1.5H9V6zm1.5 3V7.5H12V9h-1.5zM9 9h1.5v1.5H9V9zm1.5 3v-1.5H12V12h-1.5zM9 13.9a3 3 0 0 0-1.5 2.6V18h6v-1.5a3 3 0 0 0-3-3V12H9v1.9zm3 1.1v1.5H9V15h3z' })
    )
  );
};

exports.default = Icon;