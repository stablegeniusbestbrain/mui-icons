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
      _react2.default.createElement('path', { d: 'M10.5 7.5h-3V6h3v1.5zM15 9H7.5v1.5H15V9zm7.5-.7V21c0 .8-.7 1.5-1.5 1.5H3c-.8 0-1.5-.7-1.5-1.5V8.3c0-.5.2-1 .6-1.2l2.4-1.7v-.9C4.5 3.7 5.2 3 6 3h1.8L12 0l4.2 3H18c.8 0 1.5.7 1.5 1.5v.9l2.4 1.7c.4.2.6.7.6 1.2zM6 11.3l6 3.7 6-3.7V4.5H6v6.8zm-3 9l6.8-4.5L3 11.3v9zm16.5.7L12 16.5 4.5 21h15zm1.5-9.7l-6.7 4.5 6.7 4.5v-9z' })
    )
  );
};

exports.default = Icon;