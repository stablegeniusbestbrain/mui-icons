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
      _react2.default.createElement('path', { d: 'M13.5 13.5l4.5 9h-1.5l-3-6V24H12v-9l-3 7.5H7.5l3-7.5 3-1.5zM12 0h-1.5v1.5H12V0zM9 4.5H7.5V6H9V4.5zm-4.5-3H3V3h1.5V1.5zm-2.1 12a.8.8 0 0 0-.2 1l.8 1.4c.2.3.6.5 1 .3l2.1-1-1.8-3-1.9 1.3zm11.9-8.1l-8.7 5.9 1.8 3.2 9.5-4.5-2.6-4.6zm6.3 1.9l-2.2-3.7a.8.8 0 0 0-1.1-.3l-1.8 1.2 2.8 4.8 2-.9c.4-.2.5-.7.3-1.1z' })
    )
  );
};

exports.default = Icon;