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
      _react2.default.createElement('path', { d: 'M11 7.8C9.8 7.4 9 6.3 9 5c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.3-.8 2.4-2 2.8v2.8c-.3-.1-.7-.1-1-.1-.3 0-.7 0-1 .1V7.8zm7.3 13.3c-1.1-.6-1.7-1.9-1.5-3.1l-2.4-1.5c.5-.4.8-1 1-1.7l2.4 1.4c1-.8 2.4-.9 3.5-.3 1.4.8 1.9 2.7 1.1 4.1-.8 1.4-2.7 1.9-4.1 1.1zM2.7 15.9c1.1-.6 2.5-.5 3.5.3l2.4-1.4c.2.7.5 1.3 1 1.7L7.2 18c.2 1.2-.4 2.4-1.5 3.1-1.4.8-3.3.3-4.1-1.1-.8-1.4-.3-3.3 1.1-4.1zM14 14c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm3 0v.6l-1.5-.9c-.1-1.1-.7-2-1.5-2.6V9.4c1.8.8 3 2.5 3 4.6zm-2 4c-.9.6-1.9 1-3 1s-2.1-.4-3-1l1.5-.8c.5.2 1 .3 1.5.3s1-.1 1.5-.3l1.5.8zm-8-3.4V14c0-2.1 1.2-3.8 3-4.6v1.7c-.8.6-1.4 1.5-1.5 2.6l-1.5.9z' })
    )
  );
};

exports.default = Icon;