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
      _react2.default.createElement('path', { d: 'M3 4v8.5l3-3L9 13c1 1 1 2 1 2v6h4v-7s0-1-.5-2c-.6-1-1.5-2-1.5-2L9 6.6 11.5 4M18 4l-4.5 4.5.5.5s.9 1 1.5 2c.2.4.3.8.4 1.1L21 7' })
    )
  );
};

exports.default = Icon;