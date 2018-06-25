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
      _react2.default.createElement('path', { d: 'M1.9.5L.5 1.9 5.6 7H2v2h7V2H7v3.6M11 7v2h10v6h2V9c0-1.1-.9-2-2-2M7 11v10c0 1.1.9 2 2 2h6v-2H9V11m6.9 3.5l-1.4 1.4 5.1 5.1H17v2h6v-6h-2v2.6' })
    )
  );
};

exports.default = Icon;