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
      _react2.default.createElement('path', { d: 'M18.9 8.8c-.3 1.9-1.2 3.7-2.6 5.5-1.5 1.7-2.7 2.9-3.8 3.7-.7.3-1.3.3-1.8 0s-.9-.8-1.2-1.3c-.2-.4-.6-1.6-1.2-3.8-.6-2.1-1-3.3-1.1-3.4-.1-.2-.3-.2-.7-.1-.3.1-.5.2-.6.3-.2.1-.3.2-.3.2L5 9.2l.6-.7c.5-.5 1-1 1.7-1.6.7-.5 1.4-.8 1.9-1 .4 0 .7 0 .9.2.3.2.5.5.6.9.2.4.3.8.4 1.2.1.4.2.8.2 1.4.1.5.2.9.3 1.2.4 1.9.8 2.9 1.1 2.9.4 0 1.1-.9 2-2.6.4-.8.4-1.4 0-1.9-.3-.5-.9-.5-1.7-.1.1-.7.5-1.4 1.1-2 1-1.1 2.1-1.5 3.3-1.2 1.3.2 1.8 1.2 1.5 2.9z' })
    )
  );
};

exports.default = Icon;