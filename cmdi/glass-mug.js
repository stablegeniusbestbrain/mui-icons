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
      _react2.default.createElement('path', { d: 'M10 4v3h8V4h-8zM8 2h13v1l-1 1v16l1 1v1H7v-1l1-1v-1.4l-3.8-1.8c-.7-.3-1.2-1-1.2-1.8V8c0-1.1.9-2 2-2h3V4L7 3V2h1zM5 15l3 1.4V8H5v7z' })
    )
  );
};

exports.default = Icon;