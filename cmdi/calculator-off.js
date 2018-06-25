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
      _react2.default.createElement('path', { d: 'M1.5 4.8l1.3-1.3L21 21.7 19.7 23l-1.4-1.5c-.4.3-.8.5-1.3.5H7c-1.1 0-2-.9-2-2V8.3L1.5 4.8zM7 2h10c1.1 0 2 .9 2 2v13.2l-2-2V14h-1.2L13 11.2V10h-1.2l-2-2H17V4H7v1.2L5.1 3.3C5.4 2.5 6.1 2 7 2zm0 10h1.7L7 10.3V12zm8-2v2h2v-2h-2zm-8 4v2h2v-2H7zm4 2h1.7L11 14.3V16zm-4 2v2h2v-2H7zm4 0v2h2v-2h-2zm4 2h1.7L15 18.3V20z' })
    )
  );
};

exports.default = Icon;