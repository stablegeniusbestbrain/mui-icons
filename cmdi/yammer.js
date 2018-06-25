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
      _react2.default.createElement('path', { d: 'M13.5 5.9L9.2 17.1c0 .1-.9 2.5-4 2.5-.5 0-1-.4-1-1 0-.5.5-1 1-1 1.6 0 2.1-1.1 2.1-1.2l.4-1-3.9-9.5c-.2-.5.1-1.1.6-1.3.5-.2 1.1.1 1.3.6l3 7.5 3-7.5c.2-.5.8-.8 1.3-.6.5.2.7.8.5 1.3zm5 .5c-.2 0-.4 0-.5.2 0 0-4.2 3-4 3.3.2.3 4.8-1.9 4.8-1.9.4-.1.6-.4.6-.8s-.4-.8-.9-.8zm.8 10.4c-.1-.1-.3-.3-.5-.3 0 0-4.6-2.2-4.8-1.9-.2.3 4 3.3 4 3.3.3.2.6.3.9.1.5-.2.6-.7.4-1.2zm1.7-5.4c-.2-.1-.4-.1-.6-.1 0 0-5.1.6-5.1.9 0 .4 5.1.8 5.1.8.4.1.7-.1.9-.4.2-.4.1-.9-.3-1.2z' })
    )
  );
};

exports.default = Icon;