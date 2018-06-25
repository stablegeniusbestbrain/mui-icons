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
      _react2.default.createElement('path', { d: 'M3 21v-3.7l7.8-4.5 3.7 2.2 6.5-3.7V21H3zM21 8.9l-6.5 3.8-3.7-2.2L3 15v-2.2l7.8-4.5 3.7 2.2L21 6.8v2.1z' })
    )
  );
};

exports.default = Icon;