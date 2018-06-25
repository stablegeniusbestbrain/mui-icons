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
      _react2.default.createElement('path', { d: 'M21 1.5H3c-.8 0-1.5.7-1.5 1.5v18c0 .8.7 1.5 1.5 1.5h18c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zM21 21H3V3h18v18zM8.3 18H6v-2.2L15.8 6H18v2.3L8.3 18z' })
    )
  );
};

exports.default = Icon;