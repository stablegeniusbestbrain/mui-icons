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
      _react2.default.createElement('path', { d: 'M7.8 13c-.1-.4.1-.7.4-.9.7.1 1.4.5 2.1.9 0 .7-.6 1.2-1.3 1.2-.7 0-1.2-.5-1.2-1.2zm6 0c.6-.4 1.3-.7 2-.9.3.2.5.6.5.9 0 .7-.6 1.3-1.3 1.3s-1.2-.6-1.2-1.3zM12 9c-2.8 0-5.5.6-7.9 2L4 12c0 1.2.3 2.4.8 3.5 2.4-.3 4.8-.5 7.2-.5 2.4 0 4.8.2 7.2.5.5-1.1.8-2.3.8-3.5l-.1-1c-2.4-1.4-5.1-2-7.9-2zm0-7c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2z' })
    )
  );
};

exports.default = Icon;