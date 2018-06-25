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
      _react2.default.createElement('path', { d: 'M3.1 5.3l5 5-6 3.7v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5l-2-1.5v-3.7l5.8 5.7 1.2-1.3L4.4 4m8.7 5V3.5c0-.8-.6-1.5-1.5-1.5s-1.5.7-1.5 1.5v3.7L18 15l3.1 1v-2l-8-5z' })
    )
  );
};

exports.default = Icon;