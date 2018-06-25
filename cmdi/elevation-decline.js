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
      _react2.default.createElement('path', { d: 'M21 21H3v-9.7L9.5 15l3.7-2.2 7.8 4.5V21zM3 8.9V6.8l6.5 3.7 3.7-2.2 7.8 4.5V15l-7.8-4.5-3.7 2.2L3 8.9z' })
    )
  );
};

exports.default = Icon;