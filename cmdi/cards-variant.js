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
      _react2.default.createElement('path', { d: 'M5 2h14c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1zm1 2v8h12V4H6zm14 13c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-1h16v1zm0 4c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-1h16v1z' })
    )
  );
};

exports.default = Icon;