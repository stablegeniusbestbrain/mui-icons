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
      _react2.default.createElement('path', { d: 'M15 15.5c0 1.4-1.1 2.5-2.5 2.5S10 16.9 10 15.5v-1.7c0-.5.3-.8.8-.8s.7.3.7.8v1.7c0 .6.4 1 1 1s1-.4 1-1v-3.6c-.9-.3-1.5-1-1.5-1.9 0-1.1 1-2 2.3-2s2.2.9 2.2 2c0 .9-.6 1.6-1.5 1.9v3.6zM8.3 8c1.2 0 2.2.9 2.2 2 0 .9-.6 1.6-1.5 1.9v5.4c0 1.7 1.5 3.2 3.3 3.2s3.2-1.5 3.2-3.2v-3.5c0-.5.3-.8.8-.8s.7.3.7.8v3.5c0 2.6-2.1 4.7-4.7 4.7s-4.8-2.1-4.8-4.7v-5.4c-.9-.3-1.5-1-1.5-1.9 0-1.1 1-2 2.3-2zm1.8-1.9l-.5 1.5c-.4-.2-.8-.3-1.3-.3-1 0-1.8.4-2.3 1l-1.2-.9c.7-.8 1.6-1.4 2.7-1.6C7.5 3.7 9.2 2 11.3 2c2 0 3.7 1.7 3.7 3.8 1.1.2 2 .8 2.7 1.6l-1.2.9c-.5-.6-1.3-1-2.2-1-.6 0-1 .1-1.4.3l-.5-1.5c.4-.1.7-.2 1.1-.3 0-1.3-1-2.3-2.2-2.3S9 4.5 9 5.8c.4.1.7.2 1.1.3zm4.2 3.2c-.6 0-1 .3-1 .7s.4.8 1 .8 1-.4 1-.8-.5-.7-1-.7zm-6 0c-.6 0-1 .3-1 .7s.4.8 1 .8 1-.4 1-.8-.5-.7-1-.7z' })
    )
  );
};

exports.default = Icon;