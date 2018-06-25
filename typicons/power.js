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
      _react2.default.createElement('path', { d: 'M11.5 18.6c-1.7 0-3.4-.7-4.6-1.9C5.7 15.4 5 13.8 5 12.1s.7-3.4 1.9-4.6c.4-.4 1-.4 1.4 0s.4 1 0 1.4c-.8.8-1.3 2-1.3 3.2s.5 2.3 1.3 3.2c.9.8 2 1.3 3.2 1.3s2.3-.5 3.2-1.3c.8-.9 1.3-2 1.3-3.2s-.5-2.4-1.3-3.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0c1.2 1.2 1.9 2.8 1.9 4.6s-.7 3.3-1.9 4.6c-1.2 1.2-2.9 1.9-4.6 1.9zm0-7.6c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1s1 .4 1 1v5c0 .6-.4 1-1 1z' })
    )
  );
};

exports.default = Icon;