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
      _react2.default.createElement('path', { d: 'M10 19h3v3h-3v-3m2-17c5.4.2 7.7 5.6 4.5 9.7-.8 1-2.2 1.6-2.8 2.5C13 15 13 16 13 17h-3c0-1.7 0-3.1.7-4.1.6-1 2-1.6 2.8-2.2C15.9 8.4 15.3 5.3 12 5c-1.7 0-3 1.3-3 3H6c0-3.3 2.7-6 6-6z' })
    )
  );
};

exports.default = Icon;