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
      _react2.default.createElement('path', { d: 'M21 1.5H3c-.8 0-1.5.7-1.5 1.5v12c0 .8.7 1.5 1.5 1.5h3v5.3l5.3-5.3H21c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zM21 15H10.5l-3 3v-3H3V3h18v12z' })
    )
  );
};

exports.default = Icon;