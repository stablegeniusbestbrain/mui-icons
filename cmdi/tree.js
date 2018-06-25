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
      _react2.default.createElement('path', { d: 'M11 21v-4.3c-.5.2-1 .3-1.5.3C7 17 5 15 5 12.5c0-1.3.5-2.4 1.4-3.2-.3-.6-.4-1.2-.4-1.8C6 5 8 3 10.5 3c1.6 0 2.9.8 3.7 2h.3c3 0 5.5 2.5 5.5 5.5S17.5 16 14.5 16c-.5 0-1-.1-1.5-.2V21h-2z' })
    )
  );
};

exports.default = Icon;