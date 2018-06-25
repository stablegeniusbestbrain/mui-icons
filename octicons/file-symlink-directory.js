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
      _react2.default.createElement('path', { d: 'M21 6h-9V4.5c0-1-.5-1.5-1.5-1.5H3c-.8 0-1.5.7-1.5 1.5v15c0 .8.7 1.5 1.5 1.5h18c.8 0 1.5-.7 1.5-1.5v-12c0-.8-.7-1.5-1.5-1.5zM3 4.5h7.5V6H3V4.5zM12 18v-3c-1.5 0-2.8.3-3.8 1.1-1.1.7-1.8 1.8-2.2 3.4 0-2.5.6-4.3 1.7-5.6C8.8 12.6 10.2 12 12 12V9l6 4.5-6 4.5z' })
    )
  );
};

exports.default = Icon;