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
      _react2.default.createElement('path', { d: 'M10.5 13.5H6v-3h4.5V6l7.5 6-7.5 6v-4.5zM22.5 3v18c0 .8-.7 1.5-1.5 1.5H3c-.8 0-1.5-.7-1.5-1.5V3c0-.8.7-1.5 1.5-1.5h18c.8 0 1.5.7 1.5 1.5zM21 3H3v18h18V3z' })
    )
  );
};

exports.default = Icon;