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
      _react2.default.createElement('path', { d: 'M5 20.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm9.8-2H19V8.2h-3.2l-1.9-3.3c-.3-.5-.9-.8-1.5-.8-.5 0-.9.2-1.2.5L7.5 8.3c-.3.3-.5.7-.5 1.2 0 .6.3 1.2.8 1.5l3.4 2v5H13v-6.5l-2.2-1.7 2.3-2.3m5.9 13c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm0-8.5c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm-3-7.2c1 0 1.8-.8 1.8-1.8S17 1.2 16 1.2 14.2 2 14.2 3 15 4.8 16 4.8z' })
    )
  );
};

exports.default = Icon;