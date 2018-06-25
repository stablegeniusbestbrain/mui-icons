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
      _react2.default.createElement('path', { d: 'M21.2 15.4l-5.9-9.9c-.8-1.2-2-2-3.3-2s-2.5.8-3.3 2l-5.9 9.9c-.8 1.3-.8 2.7-.2 3.8C3.2 20.4 4.5 21 6 21h12c1.5 0 2.8-.6 3.4-1.8.6-1.1.6-2.5-.2-3.8zM12 17.5c-.9 0-1.6-.6-1.6-1.5s.7-1.6 1.6-1.6 1.6.7 1.6 1.6c0 .9-.7 1.5-1.6 1.5zm1.6-7.4c0 .1-1.4 3.5-1.4 3.5 0 .1-.1.1-.2.1s-.2 0-.2-.1l-1.4-3.4c-.1-.3-.1-.5-.1-.7 0-1 .7-1.8 1.7-1.8s1.8.8 1.8 1.8c0 .2-.1.4-.2.6z' })
    )
  );
};

exports.default = Icon;