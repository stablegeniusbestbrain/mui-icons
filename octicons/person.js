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
      _react2.default.createElement('path', { d: 'M21 21a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 21v-1.5c0-3.9 6-6 6-6s.3-.6 0-1.5c-1.3-.9-1.4-2.4-1.5-6 .3-3.6 2.8-4.5 4.5-4.5s4.2.9 4.5 4.5c-.1 3.6-.2 5.1-1.5 6-.3.9 0 1.5 0 1.5s6 2.1 6 6V21z' })
    )
  );
};

exports.default = Icon;