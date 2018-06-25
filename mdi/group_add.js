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
      _react2.default.createElement('path', { d: 'M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.7 0 3-1.3 3-3s-1.3-3-3-3c-.3 0-.6 0-.9.1.6.8.9 1.8.9 2.9s-.4 2-.9 2.9c.3 0 .6.1.9.1zm-5 0c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm6.6 2.2c.8.7 1.4 1.6 1.4 2.8v2h3v-2c0-1.5-2.4-2.5-4.4-2.8zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z' })
    )
  );
};

exports.default = Icon;