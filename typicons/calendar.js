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
      _react2.default.createElement('path', { d: 'M19 6.2V6c0-1.7-1.3-3-3-3s-3 1.3-3 3h-2c0-1.7-1.3-3-3-3S5 4.3 5 6v.2C3.8 6.6 3 7.7 3 9v9c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3V9c0-1.3-.8-2.4-2-2.8zM15 6c0-.6.4-1 1-1s1 .4 1 1v2c0 .6-.4 1-1 1s-1-.4-1-1V6zM7 6c0-.6.4-1 1-1s1 .4 1 1v2c0 .6-.4 1-1 1s-1-.4-1-1V6zm12 12c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-6h14v6z' })
    )
  );
};

exports.default = Icon;