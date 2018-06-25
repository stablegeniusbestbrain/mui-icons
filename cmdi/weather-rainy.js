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
      _react2.default.createElement('path', { d: 'M6 14c.6 0 1 .4 1 1s-.4 1-1 1c-2.8 0-5-2.2-5-5s2.2-5 5-5c1-2.4 3.3-4 6-4 3.4 0 6.2 2.7 6.5 6h.5c2.2 0 4 1.8 4 4s-1.8 4-4 4h-1c-.6 0-1-.4-1-1s.4-1 1-1h1c1.1 0 2-.9 2-2s-.9-2-2-2h-2V9c0-2.8-2.2-5-5-5-2.5 0-4.5 1.8-4.9 4.2C6.7 8.1 6.4 8 6 8c-1.7 0-3 1.3-3 3s1.3 3 3 3zm8.8 1.7c1.6 1.5 1.6 3.8 0 5.4-.8.8-1.8.9-2.8.9-1 0-2-.1-2.8-.9-1.6-1.6-1.6-3.9 0-5.4L12 11l2.8 4.7zm-1.4 1L12 14.3l-1.4 2.4c-.8.8-.8 2 0 2.8.4.4.9.5 1.4.5.5 0 1-.1 1.4-.5.8-.8.8-2 0-2.8z' })
    )
  );
};

exports.default = Icon;