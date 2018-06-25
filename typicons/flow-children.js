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
      _react2.default.createElement('path', { d: 'M17 16c-1.3 0-2.4.8-2.8 2H11c-1.7 0-3-1.3-3-3v-3c.8.6 1.9 1 3 1h3.2c.4 1.2 1.5 2 2.8 2 1.7 0 3-1.3 3-3s-1.3-3-3-3c-1.3 0-2.4.8-2.8 2H11c-1.7 0-3-1.3-3-3v-.2c1.2-.4 2-1.5 2-2.8 0-1.7-1.3-3-3-3S4 3.3 4 5c0 1.3.8 2.4 2 2.8V15c0 2.8 2.2 5 5 5h3.2c.4 1.2 1.5 2 2.8 2 1.7 0 3-1.3 3-3s-1.3-3-3-3zm0-5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zM7 4c.6 0 1 .5 1 1s-.4 1-1 1-1-.5-1-1 .4-1 1-1zm10 16c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z' })
    )
  );
};

exports.default = Icon;