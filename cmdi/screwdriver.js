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
      _react2.default.createElement('path', { d: 'M18 1.8c-.5 0-1 .2-1.4.6L8 11l1.5 1.5L6 16H4l-2 4 2 2 4-2v-2l3.5-3.5L13 16l8.6-8.6c.6-.9.8-2 0-2.8l-2.2-2.2c-.4-.4-.9-.6-1.4-.6zM18 4l2 2-7 7-2-2 7-7z' })
    )
  );
};

exports.default = Icon;