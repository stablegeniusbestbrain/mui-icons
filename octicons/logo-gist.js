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
      _react2.default.createElement('path', { d: 'M4.5 12.7h2.4v3.9c-.6.2-1.6.3-2.5.3-2.4 0-3.3-2.1-3.3-4.9 0-2.7.9-4.8 3.3-4.8 1.3 0 2 .2 3.2.7v-1C7 6.6 6 6.2 4.4 6.2 1.1 6.2 0 8.8 0 12c0 3.2 1.1 5.8 4.4 5.8 1.6 0 2.7-.2 3.5-.6v-5.5H4.5v1zm6.1 3.6v-6.2h-1v6.1c0 1.2.6 1.6 1.7 1.6V17c-.5 0-.7-.2-.7-.7zm.3-8.4c0-.4-.3-.7-.8-.7s-.7.3-.7.7.3.7.7.7.8-.3.8-.7zm4.2 5.5c-1.5-.2-1.8-.5-1.8-1.2s.4-1.2 1.8-1.2c1.1 0 1.6.1 2.2.3v-.9c-.6-.3-1.4-.4-2.1-.4-2.1 0-2.8 1.2-2.8 2.2 0 1.1.4 1.8 2.6 2 1.5.2 1.7.6 1.7 1.3 0 .7-.4 1.4-2 1.4-1.1 0-1.8-.2-2.2-.4v.9c.5.2 1.5.4 2.2.4 2.3 0 3-1.1 3-2.3 0-1.2-.5-1.9-2.6-2.1zm8.2-2.4v-.8H21V7.8l-1.1.3v2l-1.5.4v.5h1.5v4.8c0 1.4 1.2 2 2.4 2h.7v-.9h-.6c-.9 0-1.4-.3-1.4-1.2V11h2.3z' })
    )
  );
};

exports.default = Icon;