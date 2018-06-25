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
      _react2.default.createElement('path', { d: 'M23.6 12q.2 0 .3.1t.1.3v.9q0 .2-.1.3t-.3.1H.4q-.2 0-.3-.1t-.1-.3v-.9q0-.2.1-.3t.3-.1h23.2zm-17.1-.9q-.4-.4-.7-1-.7-1.3-.7-2.5 0-2.5 1.8-4.2 1.8-1.7 5.3-1.7.7 0 2.2.3.9.1 2.4.6.1.5.3 1.6.2 1.6.2 2.4 0 .3-.1.6l-.2.1-1.1-.1h-.2q-.6-2-1.3-2.8-1.2-1.2-2.9-1.2-1.5 0-2.4.8-.9.8-.9 2 0 .9.9 1.8t3.7 1.8q1 .2 2.3.8.8.4 1.3.7H6.5zm6.8 3.5h5.5q.1.5.1 1.2 0 1.5-.6 2.8-.3.8-.9 1.4-.5.5-1.5 1.1-1.1.7-2.1.9-1 .3-2.7.3-1.5 0-2.6-.3l-1.9-.6q-.7-.2-.9-.3-.1-.1-.1-.3v-.2q0-1.4-.1-2.1v-.9l.1-.5v-.6h1.3q.2.4.4.9t.3.8.2.3q.5.8 1.1 1.3.6.5 1.4.8.8.3 1.8.3.8 0 1.8-.4 1-.3 1.6-1.1.7-.9.7-1.8 0-1.1-1.1-2.1-.5-.4-1.8-.9z' })
    )
  );
};

exports.default = Icon;