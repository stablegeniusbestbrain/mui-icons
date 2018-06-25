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
      _react2.default.createElement('path', { d: 'M10.3 7.3v1.6q0 .1-.2.2t-.3.2h-4v10.8q0 .2-.1.3t-.3.2H3.6q-.2 0-.3-.1t-.1-.4V9.3h-4q-.2 0-.3-.2t-.1-.2V7.3q0-.2.1-.3t.3-.1H9.8q.2 0 .3.1t.2.3zm13.9-.1l1 12.9q0 .2-.1.3-.1.2-.3.2H23q-.2 0-.3-.1t-.1-.3l-.6-7.9-2.6 5.7q-.1.3-.4.3h-1.6q-.2 0-.4-.3l-2.5-5.7-.6 7.9q0 .1-.1.3t-.3.1h-1.8q-.2 0-.3-.2-.1-.1-.1-.3l1-12.9q0-.1.1-.2t.3-.1h1.9q.3 0 .4.2l3 7q.1.3.2.7.1-.1.2-.4t.1-.3l3-7q.1-.2.4-.2h1.8q.2 0 .3.1t.2.2z' })
    )
  );
};

exports.default = Icon;