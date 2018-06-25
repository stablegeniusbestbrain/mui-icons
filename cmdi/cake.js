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
      _react2.default.createElement('path', { d: 'M11.5.5c.5.3 1.5 1.9 1.5 3S12.3 5 11.5 5 10 4.9 10 3.8 11 2 11.5.5zm7 8.5C21 9 23 11 23 13.5c0 1.6-.8 2.9-2 3.7V23H3v-5.8c-1.2-.8-2-2.1-2-3.7C1 11 3 9 5.5 9H10V6h3v3h5.5zM12 16c1.4 0 2.5-1.1 2.5-2.5H16c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5h-13C4.1 11 3 12.1 3 13.5S4.1 16 5.5 16 8 14.9 8 13.5h1.5c0 1.4 1.1 2.5 2.5 2.5z' })
    )
  );
};

exports.default = Icon;