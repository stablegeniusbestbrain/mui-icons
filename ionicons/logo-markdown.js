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
      _react2.default.createElement(
        'g',
        { style: { transform: 'scale(0.045)' } },
        _react2.default.createElement('path', { d: 'M447.66 96H64.34C46.505 96 32 110.484 32 128.308v255.35C32 401.492 46.504 416 64.34 416h383.32c17.836 0 32.34-14.507 32.34-32.344V128.308C480 110.484 465.496 96 447.66 96zM284.022 352h-56.048v-96l-42.04 53.878L143.913 256v96H87.87V160h56.043l42.022 67.98 42.04-67.98h56.048v192zm83.657 0l-69.635-96h42v-96h56.043v96h42.027l-70.453 96h.018z' })
      )
    )
  );
};

exports.default = Icon;