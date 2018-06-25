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
      _react2.default.createElement('path', { d: 'M7.5 19.5h-3v-3c1.7 0 3 1.3 3 3zm-3-15V6A13.5 13.5 0 0 1 18 19.5h1.5c0-8.3-6.7-15-15-15zm0 6V12c4.1 0 7.5 3.4 7.5 7.5h1.5c0-5-4-9-9-9z' })
    )
  );
};

exports.default = Icon;