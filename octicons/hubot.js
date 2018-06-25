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
      _react2.default.createElement('path', { d: 'M6 9c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h12c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5H6zm12 2.6l-1.9 1.9h-2.2L12 11.6l-1.9 1.9H7.9L6 11.6v-1.1h1.1L9 12.4l1.9-1.9h2.2l1.9 1.9 1.9-1.9H18v1.1zm-9 4.9h6V18H9v-1.5zM12 3C6.2 3 1.5 7.4 1.5 12.8v6.7c0 .8.7 1.5 1.5 1.5h18c.8 0 1.5-.7 1.5-1.5v-6.7C22.5 7.4 17.8 3 12 3zm9 16.5H3v-6.7c0-4.7 4-8.4 9-8.4s9 3.7 9 8.4v6.7z' })
    )
  );
};

exports.default = Icon;