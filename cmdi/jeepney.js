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
      _react2.default.createElement('path', { d: 'M19 13V7h1V4H4v3h1v6H2c0 .9.5 1.7 1.5 1.9V20c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-1h11v1c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-5.1c1-.2 1.5-1 1.5-1.9h-3zM8 15c-.8 0-1.5-.7-1.5-1.5S7.2 12 8 12s1.5.7 1.5 1.5S8.8 15 8 15zm8 0c-.8 0-1.5-.7-1.5-1.5S15.2 12 16 12s1.5.7 1.5 1.5S16.8 15 16 15zm1.5-4.5c-1.6-.3-3.5-.5-5.5-.5s-4 .2-5.5.5V7h11v3.5z' })
    )
  );
};

exports.default = Icon;