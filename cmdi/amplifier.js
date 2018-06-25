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
      _react2.default.createElement('path', { d: 'M10 2h4c.6 0 1 .4 1 1h6v18h-2c0 .6-.4 1-1 1s-1-.4-1-1H7c0 .6-.4 1-1 1s-1-.4-1-1H3V3h6c0-.6.4-1 1-1zM5 5v4h14V5H5zm2 1c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm5 0h2v1h-2V6zm3 0h1v2h-1V6zm2 0h1v2h-1V6zm-5 5c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm-2-5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z' })
    )
  );
};

exports.default = Icon;