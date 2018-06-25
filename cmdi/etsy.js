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
      _react2.default.createElement('path', { d: 'M6.7 20.8c1.5-.1 3.4 0 5.2 0 1.8 0 3.7-.1 5.2 0 .6 0 1.2.4 1.7.1.4-.5.1-1.2.2-1.9.1-1.2 1.3-2.7-.4-3.1-.7.7-.2 1.3-.7 2.1-.5 1-2.2 1.4-3.9 1.5-1.5.1-4 .3-4.5-.7-.5-.9-.2-2.2-.2-3.2 0-1.2-.1-2.4.2-3.3 1.8.1 4.2-.6 5.5.2.9.5.4 1.6 1.4 1.9.7-.2.3-1.1.3-1.9-.1-.6-.1-1.3 0-1.9 0-.9.3-1.8-.6-1.9-.7.6-.2 1.5-.9 2-.3.2-.8.3-1.1.3-1.4.2-3.6 0-4.7-.2-.2-1.6-.2-3.9 0-5.6.6-.6 2-.7 3-.7 1.7.1 4.4.2 4.9 1 .3.5.1 1.5.6 1.6.9.2.5-1.6.5-2.4 0-.6.3-1 .2-1.4-.3-.5-.8-.3-1.1-.2-3.1.4-7.9.2-11.2.2-.4 0-1.1-.2-1.4.2-.2 1.1 1.2.7 1.7 1.2.2.2.4 1 .5 1.6.1 1.4 0 3.7 0 5.8 0 2.3.2 4.6 0 5.9-.1.5-.4 1.3-.5 1.4-.6.6-2.3-.1-2.1 1.3.6.4 1.4.1 2.2.1z' })
    )
  );
};

exports.default = Icon;