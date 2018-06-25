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
      _react2.default.createElement('path', { d: 'M11.8 7.5c-2.4 0-4.4 2-4.4 4.5s2.1 4.5 4.5 4.5c.9 0 1.8-.3 2.6-.8.2-.1.3-.4.1-.7-.1-.2-.4-.3-.7-.1-.5.4-1.2.6-1.9.6-2 0-3.5-1.6-3.5-3.5s1.4-3.5 3.3-3.5 3.4 1.6 3.4 3.5v.2c0 .5-.3.8-.7.8s-.8-.3-.8-.8v-1.7c0-.3-.1-.5-.4-.5-.2 0-.3.1-.4.3-.3-.2-.6-.3-1-.3-1.1 0-1.9.9-1.9 2s.9 2 2 2c.5 0 1-.2 1.4-.6.3.4.7.6 1.2.6 1 0 1.6-.8 1.6-1.7V12c0-2.5-1.9-4.5-4.4-4.5zM12 13c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.5 1-1 1zm0 8c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-16c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z' })
    )
  );
};

exports.default = Icon;