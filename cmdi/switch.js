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
      _react2.default.createElement('path', { d: 'M13 18h1c.6 0 1 .4 1 1h7v2h-7c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1H2v-2h7c0-.6.4-1 1-1h1v-2H8c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1h-3v2zm0-12h1V4h-1v2zM9 4v2h2V4H9zm0 4v2h2V8H9zm0 4v2h2v-2H9z' })
    )
  );
};

exports.default = Icon;