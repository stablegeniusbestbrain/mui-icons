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
      _react2.default.createElement('path', { d: 'M16 6h-3v1.9h3c2.3 0 4.1 1.8 4.1 4.1s-1.8 4.1-4.1 4.1h-3V18h3c3.3 0 6-2.7 6-6s-2.7-6-6-6zM3.9 12c0-2.3 1.8-4.1 4.1-4.1h3V6H8c-3.3 0-6 2.7-6 6s2.7 6 6 6h3v-1.9H8c-2.3 0-4.1-1.8-4.1-4.1zM8 13h8v-2H8v2z' })
    )
  );
};

exports.default = Icon;