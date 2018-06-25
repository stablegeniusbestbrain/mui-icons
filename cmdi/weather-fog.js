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
      _react2.default.createElement('path', { d: 'M3 15h10c.6 0 1 .4 1 1s-.4 1-1 1H3c-.6 0-1-.4-1-1s.4-1 1-1zm13 0h5c.6 0 1 .4 1 1s-.4 1-1 1h-5c-.6 0-1-.4-1-1s.4-1 1-1zM1 12c0-2.8 2.2-5 5-5 1-2.3 3.3-4 6-4 3.4 0 6.2 2.7 6.5 6h.5c2.2 0 4 1.8 4 4h-2c0-1.1-.9-2-2-2h-2v-1c0-2.8-2.2-5-5-5-2.5 0-4.5 1.8-4.9 4.2C6.7 9.1 6.4 9 6 9c-1.7 0-3 1.3-3 3 0 .3.1.7.2 1H1.1L1 12zm2 7h2c.6 0 1 .4 1 1s-.4 1-1 1H3c-.6 0-1-.4-1-1s.4-1 1-1zm5 0h13c.6 0 1 .4 1 1s-.4 1-1 1H8c-.6 0-1-.4-1-1s.4-1 1-1z' })
    )
  );
};

exports.default = Icon;