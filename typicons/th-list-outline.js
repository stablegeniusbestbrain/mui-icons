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
      _react2.default.createElement('path', { d: 'M19 18c.6 0 1 .4 1 1s-.4 1-1 1h-7c-.6 0-1-.4-1-1s.4-1 1-1h7m0-2h-7c-1.7 0-3 1.3-3 3s1.3 3 3 3h7c1.7 0 3-1.3 3-3s-1.3-3-3-3zm0-5c.6 0 1 .4 1 1s-.4 1-1 1h-7c-.6 0-1-.4-1-1s.4-1 1-1h7m0-2h-7c-1.7 0-3 1.3-3 3s1.3 3 3 3h7c1.7 0 3-1.3 3-3s-1.3-3-3-3zm0-5c.6 0 1 .5 1 1s-.4 1-1 1h-7c-.6 0-1-.5-1-1s.4-1 1-1h7m0-2h-7c-1.7 0-3 1.3-3 3s1.3 3 3 3h7c1.7 0 3-1.3 3-3s-1.3-3-3-3zM6 16H4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm0 4H4v-2h2v2zM6 9H4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm0 4H4v-2h2v2zM6 2H4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 4H4V4h2v2z' })
    )
  );
};

exports.default = Icon;