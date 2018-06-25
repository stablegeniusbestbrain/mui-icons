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
      _react2.default.createElement('path', { d: 'M17 4H7C5.3 4 4 5.3 4 7v11c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3zm1 14c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1v-7.3c.3.2.6.3 1 .3h1.5c0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5H17c.4 0 .7-.1 1-.3V18zm-8.5-7h5c0 1.4-1.1 2.5-2.5 2.5S9.5 12.4 9.5 11zM18 9c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V7c0-.5.4-1 1-1h10c.6 0 1 .5 1 1v2z' })
    )
  );
};

exports.default = Icon;