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
      _react2.default.createElement('path', { d: 'M22 24l-5.2-5 .6 2H4.5C3.1 21 2 19.9 2 18.5v-15C2 2.1 3.1 1 4.5 1h15C20.9 1 22 2.1 22 3.5V24zM12 6.8c-2.7 0-4.6 1.1-4.6 1.1 1.1-.9 2.9-1.4 2.9-1.4l-.2-.2c-1.7.1-3.2 1.2-3.2 1.2-1.7 3.6-1.6 6.7-1.6 6.7 1.4 1.8 3.5 1.7 3.5 1.7l.7-.9c-1.3-.3-2.1-1.4-2.1-1.4s1.9 1.3 4.6 1.3c2.7 0 4.6-1.3 4.6-1.3s-.8 1.1-2.1 1.4l.7.9s2.1.1 3.5-1.7c0 0 .1-3.1-1.6-6.7 0 0-1.5-1.1-3.2-1.2l-.2.2s1.8.5 2.9 1.5c0 0-1.9-1.2-4.6-1.2zm-2.1 3.8c.7 0 1.2.6 1.2 1.3 0 .7-.5 1.2-1.2 1.2-.6 0-1.1-.5-1.1-1.2s.5-1.3 1.1-1.3zm4.2 0c.7 0 1.2.6 1.2 1.3s-.5 1.2-1.2 1.2c-.6 0-1.2-.5-1.2-1.2s.5-1.3 1.2-1.3z' })
    )
  );
};

exports.default = Icon;