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
      _react2.default.createElement('path', { d: 'M15 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zM4 13c-.6 0-1-.4-1-1s.4-1 1-1c.5 0 1 .4 1 1s-.5 1-1 1zM22 3H7.6c-.6 0-1.2.3-1.6.8L0 12l6 8.2c.4.5 1 .8 1.6.8H22c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 8c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm2 5c1.9 0 3.4-1.3 3.8-3h-7.6c.4 1.7 1.9 3 3.8 3zm2-5c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1z' })
    )
  );
};

exports.default = Icon;