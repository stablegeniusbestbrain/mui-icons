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
      _react2.default.createElement('path', { d: 'M5 22v-2h1v-4H5v-2h1v-3H5V7h6V3h-1V2h4v1h-1v4h6v4h-1v3h1v2h-1v4h1v2H5zM17 9c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1z' })
    )
  );
};

exports.default = Icon;