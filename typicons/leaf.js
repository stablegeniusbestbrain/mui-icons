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
      _react2.default.createElement('path', { d: 'M20 11c0-4.9-3.5-9.1-8.3-10h-.4C6.5 1.9 3 6.1 3 11c0 4.6 3.1 8.6 7.5 9.8V22c0 .6.4 1 1 1s1-.4 1-1v-1.2c4.4-1.2 7.5-5.2 7.5-9.8zm-7.5 7.7v-3l4.4-4.3c.1-.2.1-.6 0-.8s-.6-.1-.8 0l-3.6 3.7v-3.6l2.4-2.3c.1-.2.1-.6 0-.8s-.6-.1-.8 0l-1.6 1.7V6c0-.6-.4-1-1-1s-1 .4-1 1v3.3L8.9 7.6c-.2-.1-.6-.1-.8 0s-.1.6 0 .8l2.4 2.3v3.6l-3.6-3.7c-.2-.1-.6-.1-.8 0s-.1.6 0 .8l4.4 4.3v3C7.3 17.6 5 14.5 5 11c0-3.9 2.7-7.2 6.5-8 3.8.8 6.5 4.1 6.5 8 0 3.5-2.3 6.6-5.5 7.7z' })
    )
  );
};

exports.default = Icon;