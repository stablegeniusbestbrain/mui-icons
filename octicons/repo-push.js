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
      _react2.default.createElement('path', { d: 'M9 4.5H7.5V3H9v1.5zm-1.5 3H9V6H7.5v1.5zm6 0l-4.5 6h3V24h3V13.5h3l-4.5-6zm6-7.5h-15C3.7 0 3 .7 3 1.5v18c0 .8.7 1.5 1.5 1.5h6v-1.5h-6v-3h6V15H6V1.5h13.5V15h-3v1.5h3v3h-3V21h3c.8 0 1.5-.7 1.5-1.5v-18c0-.8-.7-1.5-1.5-1.5z' })
    )
  );
};

exports.default = Icon;