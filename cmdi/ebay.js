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
      _react2.default.createElement('path', { d: 'M3.8 10.5c-.8 0-1.6.5-1.6 1.4h3.2c0-.8-.7-1.4-1.6-1.4zm0-.7c2.1 0 2.7 1.3 2.7 2.2V7.8h1.1v2.8s.5-.8 2.1-.8 2.6 1.1 2.6 2.6c0 .1-.1.3-.1.5.3-.8 1.2-1.1 2.7-1.1h1.4v-.3c0-.6-.6-1-1.4-1-1.2 0-1.2.8-1.2.8h-1.2c0-.3.1-1.5 2.5-1.5.8 0 1.6.1 2.1.8l-.3-.6h1.3l1.8 3.7 1.9-3.7H23l-3.4 6.7h-1.2l.9-1.9-2.1-3.9c.1.2.2.5.2.8V14.8h-1v-.7s-.6.9-2.2.9c-1.2 0-2.1-.6-2.1-1.6v-.2c-.3 1.1-1.2 1.8-2.4 1.8-1.5 0-2.1-.9-2.1-.9v.7H6.5v-2.1H2.1c0 .9.7 1.6 1.7 1.6 1.2 0 1.5-.9 1.5-.9h1.1S6.3 15 3.9 15c-2 0-2.9-1-2.9-2.6 0-2 1.3-2.6 2.8-2.6zm5.6.7c-1.2 0-1.8 1-1.8 1.9 0 1 .7 1.8 1.8 1.8.9 0 1.7-.7 1.7-1.8s-.7-1.9-1.7-1.9zm6.9 2c-1.8 0-3 0-3 .9 0 .5.4.9 1.2.9 1.5 0 1.8-1.1 1.8-1.5v-.3z' })
    )
  );
};

exports.default = Icon;