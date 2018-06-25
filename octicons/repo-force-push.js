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
      _react2.default.createElement('path', { d: 'M18 13.5h-3V24h-3V13.5H9L12.4 9H9l4.5-6L18 9h-3.4l3.4 4.5zM19.5 0h-15C3.7 0 3 .7 3 1.5v18c0 .8.7 1.5 1.5 1.5h6v-1.5h-6v-3h6V15H6V1.5h13.5V15h-3v1.5h3v3h-3V21h3c.8 0 1.5-.7 1.5-1.5v-18c0-.8-.7-1.5-1.5-1.5z' })
    )
  );
};

exports.default = Icon;