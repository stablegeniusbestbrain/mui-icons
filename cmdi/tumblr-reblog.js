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
      _react2.default.createElement('path', { d: 'M3.8 17L8 12.8V16h10v-4.5l2-2V16c0 1.1-.9 2-2 2H8v3.3L3.8 17zM20.3 7L16 11.3V8H6v4.5l-2 2V8c0-1.1.9-2 2-2h10V2.8L20.3 7z' })
    )
  );
};

exports.default = Icon;