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
      _react2.default.createElement('path', { d: 'M21 4.5h-9c-.8 0-1.5.7-1.5 1.5v12c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5V6c0-.8-.7-1.5-1.5-1.5zm-1.5 12h-6v-9h6v9zM7.5 6H9v1.5H7.5v9H9V18H7.5c-.8 0-1.5-.7-1.5-1.5v-9C6 6.7 6.7 6 7.5 6zM3 7.5h1.5V9H3v6h1.5v1.5H3c-.8 0-1.5-.7-1.5-1.5V9c0-.8.7-1.5 1.5-1.5z' })
    )
  );
};

exports.default = Icon;