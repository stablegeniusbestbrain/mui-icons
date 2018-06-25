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
      _react2.default.createElement('path', { d: 'M22.5 9V7.5h-6v-3h-3V6h-3C9 6 7.8 7.2 7.5 9L6 10.5c-2.5 0-4.5 2-4.5 4.5v3H3v-3c0-1.7 1.3-3 3-3l1.5 1.5c.4 1.7 1.5 3 3 3h3V18h3v-3h6v-1.5h-6V9h6z' })
    )
  );
};

exports.default = Icon;