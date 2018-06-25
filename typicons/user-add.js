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
      _react2.default.createElement('path', { d: 'M9 14c1.4 0 2.6-.6 3.5-1.5.9-.9 1.5-2.1 1.5-3.5s-.6-2.6-1.5-3.5C11.6 4.6 10.4 4 9 4s-2.6.6-3.5 1.5C4.6 6.4 4 7.6 4 9s.6 2.6 1.5 3.5c.9.9 2.1 1.5 3.5 1.5zm0 7c3.5 0 6-1 6-2 0-2-2.4-4-6-4-3.7 0-6 2-6 4 0 1 2.3 2 6 2zm12-9h-2v-2c0-.6-.4-1-1-1s-1 .4-1 1v2h-2c-.6 0-1 .4-1 1s.4 1 1 1h2v2c0 .6.4 1 1 1s1-.4 1-1v-2h2c.6 0 1-.4 1-1s-.4-1-1-1z' })
    )
  );
};

exports.default = Icon;