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
      _react2.default.createElement('path', { d: 'M7 13h14v-2H7m0 8h14v-2H7M7 7h14V5H7m-5 6h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2m1-2h1V4H2v1h1M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1z' })
    )
  );
};

exports.default = Icon;