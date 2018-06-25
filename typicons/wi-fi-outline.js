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
      _react2.default.createElement('path', { d: 'M21.2 10.8c0-.8-.3-1.5-.7-2.1-.1-.1-.2-.1-.3-.2-.1-.2-.3-.3-.5-.5-4.4-3.7-11-3.7-15.4 0-.2.2-.7.8-.7.8-.5.5-.8 1.3-.8 2 0 .9.4 1.8.8 2.2l5.8 5.8c.6.7 1.5 1.2 2.6 1.2 1 0 1.7-.2 2.5-1l5.6-5.6c.7-.7 1.1-1.7 1.1-2.6zM12 18c-.8 0-1.5-.7-1.5-1.5S11.2 15 12 15s1.5.7 1.5 1.5S12.8 18 12 18zm3.9-3.3c-.3.3-.7.5-1.1.5-.4 0-.7-.2-1-.5-1-.9-2.6-.9-3.6 0-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1 2.2-2.1 5.6-2.1 7.8 0 .6.6.6 1.5 0 2.1zm2.8-2.8c-.3.3-.7.4-1 .4s-.8-.1-1.1-.4c-2.5-2.5-6.7-2.5-9.2 0-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1C9 6.1 15 6.1 18.7 9.8c.6.6.6 1.5 0 2.1z' })
    )
  );
};

exports.default = Icon;