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
      _react2.default.createElement('path', { d: 'M12 2c-1.7 0-3 1.3-3 3 0 1.3.8 2.4 2 2.8V10H8v2h3v6.9c-1.8-.3-3.5-1.3-4.5-2.9H8v-2H3v5h2v-1.7c1.6 2.3 4.2 3.7 7 3.7s5.4-1.4 7-3.7V19h2v-5h-5v2h1.5c-1 1.6-2.7 2.6-4.5 2.9V12h3v-2h-3V7.8c1.2-.4 2-1.5 2-2.8 0-1.7-1.3-3-3-3zm0 2c.6 0 1 .4 1 1s-.4 1-1 1-1-.5-1-1 .4-1 1-1z' })
    )
  );
};

exports.default = Icon;