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
      _react2.default.createElement('path', { d: 'M11.7 4c.7 0 1.3.6 1.3 1.3v15.4c0 .7-.6 1.3-1.3 1.3H2.3c-.7 0-1.3-.6-1.3-1.3V5.3C1 4.6 1.6 4 2.3 4H4V2h6v2h1.7zm3.3 8h8v2h-8v-2zM3 13h8V6H3v7z' })
    )
  );
};

exports.default = Icon;