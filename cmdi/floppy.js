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
      _react2.default.createElement('path', { d: 'M4.5 22L2 19.5V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2h-3v-7c0-.6-.4-1-1-1H7c-.6 0-1 .4-1 1v7H4.5zM5 4v6c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V4H5zm3 12h3v4H8v-4zM20 4v1h1V4h-1z' })
    )
  );
};

exports.default = Icon;