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
      _react2.default.createElement('path', { d: 'M9 11.5c1.4 0 2.5-1.1 2.5-2.5S10.4 6.5 9 6.5 6.5 7.6 6.5 9s1.1 2.5 2.5 2.5zM9 2c3.9 0 7 3.1 7 7 0 5.2-7 13-7 13S2 14.2 2 9c0-3.9 3.1-7 7-7zm6 15h3v-3h2v3h3v2h-3v3h-2v-3h-3v-2z' })
    )
  );
};

exports.default = Icon;