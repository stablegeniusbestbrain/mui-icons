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
      _react2.default.createElement('path', { d: 'M5 3h2l3 2-3 2v1.3c1.5-.2 3.2-.3 5-.3 1.8 0 3.5.1 5 .3V3h2l3 2-3 2v1.7c1.9.5 3 1.1 3 1.8 0 1.4-4.5 2.5-10 2.5S2 11.9 2 10.5c0-.7 1.1-1.3 3-1.8V3zm7 6.5c-3.3 0-5 .2-5 1s1.7 1 5 1 5-.2 5-1-1.7-1-5-1zm0 5.3c3.8 0 7.2-.7 9.4-1.8L20 21h-5v-2c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v2H4l-1.4-8c2.2 1.1 5.6 1.8 9.4 1.8z' })
    )
  );
};

exports.default = Icon;