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
      _react2.default.createElement('path', { d: 'M19.5 3h-3c0-.8-.7-1.5-1.5-1.5h-4.5C9.7 1.5 9 2.2 9 3H6c-.8 0-1.5.7-1.5 1.5V6c0 .8.7 1.5 1.5 1.5V21c0 .8.7 1.5 1.5 1.5H18c.8 0 1.5-.7 1.5-1.5V7.5c.8 0 1.5-.7 1.5-1.5V4.5c0-.8-.7-1.5-1.5-1.5zM18 21H7.5V7.5H9v12h1.5v-12H12v12h1.5v-12H15v12h1.5v-12H18V21zm1.5-15H6V4.5h13.5V6z' })
    )
  );
};

exports.default = Icon;