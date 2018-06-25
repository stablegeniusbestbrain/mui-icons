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
      _react2.default.createElement('path', { d: 'M13 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h9V2h-9zm7 8v4h-7v-4h7zm0 6v4h-7v-4h7zm0-12v4h-7V4h7zM9 11H6V8H4v3H1v2h3v3h2v-3h3v-2z' })
    )
  );
};

exports.default = Icon;