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
      _react2.default.createElement('path', { d: 'M9 4.5h1.5V6H9V4.5zm-3 0h1.5V6H6V4.5zm-3 0h1.5V6H3V4.5zm18 15H3v-12h18v12zM21 6h-9V4.5h9V6zm1.5-1.5c0-.8-.7-1.5-1.5-1.5H3c-.8 0-1.5.7-1.5 1.5v15c0 .8.7 1.5 1.5 1.5h18c.8 0 1.5-.7 1.5-1.5v-15z' })
    )
  );
};

exports.default = Icon;