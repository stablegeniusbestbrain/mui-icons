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
      _react2.default.createElement('path', { d: 'M9 8c1.1 0 2 .9 2 2 0 .4-.1.7-.3 1-.3-.6-1-1-1.7-1s-1.4.4-1.7 1c-.2-.3-.3-.6-.3-1 0-1.1.9-2 2-2zm6 0c1.1 0 2 .9 2 2 0 .4-.1.7-.3 1-.3-.6-1-1-1.7-1s-1.4.4-1.7 1c-.2-.3-.3-.6-.3-1 0-1.1.9-2 2-2zm-3 12c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zm0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zM9 13h6c.6 0 1 .4 1 1s-.4 1-1 1c0 2-.9 3-2 3s-2-1-2-3H9c-.6 0-1-.4-1-1s.4-1 1-1z' })
    )
  );
};

exports.default = Icon;