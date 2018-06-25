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
      _react2.default.createElement('circle', { cx: '19.5', cy: '19.5', r: '1.5' }),
      _react2.default.createElement('path', { d: 'M17 5.9L9 2v18H7v-1.7c-1.8.3-3 1-3 1.7 0 1.1 2.7 2 6 2s6-.9 6-2c0-1-2.2-1.8-5-2V9l6-3.1z' })
    )
  );
};

exports.default = Icon;