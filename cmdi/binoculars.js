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
      _react2.default.createElement('path', { d: 'M11 6h2v7h-2V6zM9 20c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-5l2-9h4v7c0 .6-.4 1-1 1v6zm1-15H7V3h3v2zm5 15v-6c-.6 0-1-.4-1-1V6h4l2 9v5c0 .6-.4 1-1 1h-3c-.6 0-1-.4-1-1zM14 5V3h3v2h-3z' })
    )
  );
};

exports.default = Icon;