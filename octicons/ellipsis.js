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
      _react2.default.createElement('path', { d: 'M19.5 7.5h-15C3.7 7.5 3 8.2 3 9v6c0 .8.7 1.5 1.5 1.5h15c.8 0 1.5-.7 1.5-1.5V9c0-.8-.7-1.5-1.5-1.5zM9 13.5H6v-3h3v3zm4.5 0h-3v-3h3v3zm4.5 0h-3v-3h3v3z' })
    )
  );
};

exports.default = Icon;