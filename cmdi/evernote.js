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
      _react2.default.createElement('path', { d: 'M15.1 11.6s.2-1.2.9-1.2c.8 0 1.8 1.7 1.8 1.7s-2.3-.5-2.7-.5zM19 4.7c-.4-.6-2.2-1.3-3.1-1.3h-2.4S12.7 2 10.9 2C9 2 9.2 2.8 9.2 3.5v2.8l-.9.9H4.5s-1.1.7-1.1 2.2c0 1.6.5 6.9 3.7 7.4 3.8.6 4.5-1.1 4.5-1.3v-2.3s1.1 2.1 2.8 2.1c1.7 0 2.6 1 2.6 2v1.8s0 1.2-1 1.2h-2.1s-.7-.6-.7-1.3c0-.7.3-1 .7-1 .4 0 .7.1.7.1v-1.6s-3.1 0-3.1 2.4c0 2.5 1.6 3.1 3 3.1h2.1s4-.5 4-8.2c0-7.8-1.3-8.5-1.6-9.1zM7.5 6.3H4.3l4-4.1v3.3l-.8.8z' })
    )
  );
};

exports.default = Icon;