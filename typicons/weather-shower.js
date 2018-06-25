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
      _react2.default.createElement('path', { d: 'M17 18c-.6 0-1-.4-1-1s.4-1 1-1c1.7 0 3-1.3 3-3s-1.3-3-3-3c-.2 0-.5 0-.8.1l-1.1.3-.2-1.1C14.6 7.4 13 6 11 6c-2.2 0-4 1.8-4 4 0 .3 0 .5.1.8l.2 1.2H5.9c-1 0-1.9.9-1.9 2s.9 2 2 2c.6 0 1 .4 1 1s-.4 1-1 1c-2.2 0-4-1.8-4-4 0-1.9 1.3-3.4 3-3.9V10c0-3.3 2.7-6 6-6 2.6 0 4.8 1.6 5.6 4 3-.2 5.4 2.1 5.4 5 0 2.8-2.2 5-5 5zm-6.5 0l1-3 1 3c.2.6-.1 1.1-.7 1.3-.5.2-1.1-.1-1.3-.6-.1-.3-.1-.5 0-.7zm3 2l1-3 1 3c.2.6-.1 1.1-.7 1.3-.5.2-1.1-.1-1.3-.6-.1-.3-.1-.5 0-.7zm-6 0l1-3 1 3c.2.6-.1 1.1-.7 1.3-.5.2-1.1-.1-1.3-.6-.1-.3-.1-.5 0-.7z' })
    )
  );
};

exports.default = Icon;