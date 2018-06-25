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
      _react2.default.createElement('path', { d: 'M19.6 12.3c-.1-.6-.3-1.1-.6-1.4-.4-.4-.9-.5-1.4-.5-.6 0-1.1.2-1.4.5-.3.3-.6.8-.6 1.4m6.3-.3c.1.4.1 1 .1 1.8h-6.5c0 .9.4 1.5.9 1.9.4.2.8.3 1.3.3.6 0 1-.1 1.3-.4.2-.1.4-.3.5-.6h2.4c-.1.5-.4 1.1-.9 1.6-.8.9-1.9 1.3-3.3 1.3-1.2 0-2.3-.3-3.2-1.1-.9-.7-1.3-1.9-1.3-3.5s.4-2.8 1.2-3.6c.8-.8 1.9-1.2 3.2-1.2.8 0 1.5.1 2.1.4.6.3 1.1.7 1.5 1.3.4.5.6 1.1.7 1.8zM9.6 14.1c0-.7-.3-1.1-.8-1.4-.3-.1-.7-.2-1.3-.2H4.9v3.3h2.6c.5 0 1 0 1.3-.2.5-.3.8-.8.8-1.5zm-4.7-3.6h2.6c.5 0 1-.1 1.3-.3.4-.3.5-.6.5-1.1 0-.6-.2-1-.6-1.2-.4-.1-.9-.2-1.5-.2H4.9m6.8 4.7c.3.5.5 1.1.5 1.8 0 .8-.2 1.4-.6 2-.2.4-.5.7-.8 1-.4.3-.9.5-1.4.6-.6.1-1.2.2-1.8.2H2V5.6h6c1.5 0 2.6.4 3.2 1.3.4.5.6 1.1.6 1.9 0 .7-.2 1.4-.6 1.8-.2.3-.5.5-.9.7.6.3 1.1.6 1.4 1.1zm8.4-5.1h-5V6.1h5v1.2z' })
    )
  );
};

exports.default = Icon;