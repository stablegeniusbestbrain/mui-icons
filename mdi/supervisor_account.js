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
      _react2.default.createElement('path', { d: 'M16.5 12c1.4 0 2.5-1.1 2.5-2.5S17.9 7 16.5 7 14 8.1 14 9.5s1.1 2.5 2.5 2.5zM9 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm7.5 3c-1.8 0-5.5.9-5.5 2.8V19h11v-2.2c0-1.9-3.7-2.8-5.5-2.8zM9 13c-2.3 0-7 1.2-7 3.5V19h7v-2.2c0-.9.3-2.4 2.4-3.5-.9-.2-1.7-.3-2.4-.3z' })
    )
  );
};

exports.default = Icon;