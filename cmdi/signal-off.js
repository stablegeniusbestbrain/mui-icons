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
      _react2.default.createElement('path', { d: 'M18 3v13.2l3 3V3h-3zM4.3 5L3 6.3l7.7 7.7H8v7h3v-6.7l2 2V21h3v-1.7l3.7 3.7 1.3-1.3L4.3 5zM13 9v2.2l3 3V9h-3zM3 18v3h3v-3H3z' })
    )
  );
};

exports.default = Icon;