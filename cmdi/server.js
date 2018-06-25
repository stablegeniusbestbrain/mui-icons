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
      _react2.default.createElement('path', { d: 'M4 1h16c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1zm0 8h16c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1zm0 8h16c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1zM9 5h1V3H9v2zm0 8h1v-2H9v2zm0 8h1v-2H9v2zM5 3v2h2V3H5zm0 8v2h2v-2H5zm0 8v2h2v-2H5z' })
    )
  );
};

exports.default = Icon;