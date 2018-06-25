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
      _react2.default.createElement('path', { d: 'M8 20c-1.7 0-3-1.3-3-3V8c0-1.7 1.3-3 3-3s3 1.3 3 3v9c0 1.7-1.3 3-3 3zM8 7c-.6 0-1 .5-1 1v9c0 .6.4 1 1 1s1-.4 1-1V8c0-.5-.4-1-1-1zm7 13c-1.7 0-3-1.3-3-3V8c0-1.7 1.3-3 3-3s3 1.3 3 3v9c0 1.7-1.3 3-3 3zm0-13c-.6 0-1 .5-1 1v9c0 .6.4 1 1 1s1-.4 1-1V8c0-.5-.4-1-1-1z' })
    )
  );
};

exports.default = Icon;