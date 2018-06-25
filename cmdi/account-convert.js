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
      _react2.default.createElement('path', { d: 'M7.5 21.5l1.3-1.3 3.9 3.8H12C5.7 24 .6 19.2.1 13h1.5c.3 3.8 2.7 6.9 5.9 8.5zm9-19l-1.3 1.3L11.3 0h.7c6.3 0 11.4 4.8 11.9 11h-1.5c-.3-3.8-2.6-6.9-5.9-8.5zM6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1zm9-8c0 1.7-1.3 3-3 3s-3-1.3-3-3 1.3-3 3-3 3 1.3 3 3z' })
    )
  );
};

exports.default = Icon;