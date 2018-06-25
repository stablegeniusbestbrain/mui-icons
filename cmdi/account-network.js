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
      _react2.default.createElement('path', { d: 'M13 16v2h1c.6 0 1 .4 1 1h7v2h-7c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1H2v-2h7c0-.6.4-1 1-1h1v-2H5v-1.5c0-1.9 3.1-3.5 7-3.5s7 1.6 7 3.5V16h-6zM12 2c1.9 0 3.5 1.6 3.5 3.5S13.9 9 12 9 8.5 7.4 8.5 5.5 10.1 2 12 2z' })
    )
  );
};

exports.default = Icon;