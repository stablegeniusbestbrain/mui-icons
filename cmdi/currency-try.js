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
      _react2.default.createElement('path', { d: 'M19 12c0 5-4 9-9 9H8v-8.2l-3 1.1v-2.2l3-1.1V8.9L5 10V7.8l3-1.1V3h2v3l5-1.8v2.1l-5 1.8v1.8l5-1.8v2.1L10 12v7c3.9 0 7-3.1 7-7h2z' })
    )
  );
};

exports.default = Icon;