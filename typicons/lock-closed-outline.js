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
      _react2.default.createElement('circle', { cx: '12', cy: '17', r: '1.3' }),
      _react2.default.createElement('path', { d: 'M17 10h-1V8c0-2.2-1.8-4-4-4S8 5.8 8 8v2H7c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm-7-2c0-1.1.9-2 2-2s2 .9 2 2v3h-4V8zm7 11H7v-7h10v7z' })
    )
  );
};

exports.default = Icon;