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
      _react2.default.createElement('path', { d: 'M2 18h7V6.1c-1.7.5-3 2-3 3.9v1h2v6H6c-1.1 0-2-.9-2-2v-5c0-3.3 2.7-6 6-6h1c3.3 0 6 2.7 6 6v2h1V9h2v3c0 1.1-.9 2-2 2h-1v1c0 1.1-.9 2-2 2h-2v-6h2v-1c0-1.9-1.3-3.4-3-3.9V18h10v2H2v-2z' })
    )
  );
};

exports.default = Icon;