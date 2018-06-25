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
      _react2.default.createElement('path', { d: 'M21.9 6.6l-6 9.9-4.3-7.1L15 3.8c.2-.2.5-.3.8-.3l6.1 3.1zm.1 13.2c0 .6-.5.8-1.1.5l-4.7-2.4L22 8.4v11.4zm-13 .1c0 .6-.4.9-.9.6l-5.5-2.7c-.4-.2-.6-.6-.6-.9V4.1c0-.4.3-.6.7-.4l6 3 .3.4v12.8zm6.3-2.4L10 14.8v-6l5.3 8.7z' })
    )
  );
};

exports.default = Icon;