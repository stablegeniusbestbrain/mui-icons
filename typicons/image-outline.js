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
      _react2.default.createElement('path', { d: 'M8.5 8c.8 0 1.5.7 1.5 1.5S9.3 11 8.5 11 7 10.3 7 9.5 7.7 8 8.5 8m0-1C7.1 7 6 8.1 6 9.5S7.1 12 8.5 12 11 10.9 11 9.5 9.9 7 8.5 7zm7.5 5c.4.1 1.3 1.8 1.8 4H6.4c.4-1 1-2 1.6-2 .8 0 1.1.2 1.5.4.5.3 1 .6 2 .6 1.1 0 1.9-.9 2.7-1.7.6-.7 1.2-1.3 1.8-1.3m0-1c-2 0-3 3-4.5 3S10 13 8 13s-3 4-3 4h14s-1-6-3-6zm6-5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 12H4V6h16v12z' })
    )
  );
};

exports.default = Icon;