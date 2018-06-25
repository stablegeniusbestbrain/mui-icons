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
      _react2.default.createElement('path', { d: 'M2 21h19v-3H2v3zM20 8H3c-.5 0-1 .4-1 1v6c0 .6.5 1 1 1h17c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1zM2 3v3h19V3H2z' })
    )
  );
};

exports.default = Icon;