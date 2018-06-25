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
      _react2.default.createElement('path', { d: 'M16.5 10.5h-9V21H21c.8 0 1.5-.7 1.5-1.5V12h-6v-1.5zm-1.5 3H9V12h6v1.5zM21 6h-9V4.5c0-1-.5-1.5-1.5-1.5H3c-.8 0-1.5.7-1.5 1.5v15c0 .8.7 1.5 1.5 1.5h3V10.5C6 9.7 6.7 9 7.5 9h9c.8 0 1.5.7 1.5 1.5h4.5v-3c0-.8-.7-1.5-1.5-1.5zM10.5 6H3V4.5h7.5V6z' })
    )
  );
};

exports.default = Icon;