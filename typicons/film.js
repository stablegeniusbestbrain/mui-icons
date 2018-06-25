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
      _react2.default.createElement('path', { d: 'M8 8v7h8V8H8zm7 6H9V9h6v5zm2-12h-3v2h-4V2H7C5.3 2 4 3.3 4 5v13c0 1.7 1.3 3 3 3h3v-2h4v2h3c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3zm1 4c-.6 0-1 .4-1 1s.4 1 1 1v1c-.6 0-1 .4-1 1s.4 1 1 1v1c-.6 0-1 .4-1 1s.4 1 1 1v1c-.6 0-1 .4-1 1s.4 1 1 1v1c0 .6-.4 1-1 1h-1v-2H8v2H7c-.6 0-1-.4-1-1v-1c.6 0 1-.4 1-1s-.4-1-1-1v-1c.6 0 1-.4 1-1s-.4-1-1-1v-1c.6 0 1-.4 1-1s-.4-1-1-1V8c.6 0 1-.4 1-1s-.4-1-1-1V5c0-.5.4-1 1-1h1v2h8V4h1c.6 0 1 .5 1 1v1z' })
    )
  );
};

exports.default = Icon;