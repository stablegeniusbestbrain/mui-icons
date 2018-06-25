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
      _react2.default.createElement('path', { d: 'M11 2h2v2h2v2h-2v3.4l9 3.6v2l-2-.8V22h-6v-5c0-1.1-.9-2-2-2s-2 .9-2 2v5H4v-7.8L2 15v-2l9-3.6V6H9V4h2V2zM6 20h2v-5l-1-1-1 1v5zm10 0h2v-5l-1-1-1 1v5z' })
    )
  );
};

exports.default = Icon;