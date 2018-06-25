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
      _react2.default.createElement('path', { d: 'M12 21c-2.5 0-4.6-.9-6.4-2.6C3.9 16.6 3 14.5 3 12c0-2.5.9-4.6 2.6-6.4C7.4 3.9 9.5 3 12 3c2.5 0 4.6.9 6.4 2.6C20.1 7.4 21 9.5 21 12c0 2.5-.9 4.6-2.6 6.4-1.8 1.7-3.9 2.6-6.4 2.6zm0-16c-2 0-3.6.7-5 2-1.3 1.4-2 3-2 5 0 1.9.7 3.6 2 4.9 1.4 1.4 3 2.1 5 2.1 1.9 0 3.6-.7 4.9-2.1 1.4-1.3 2.1-3 2.1-4.9 0-2-.7-3.6-2.1-5-1.3-1.3-3-2-4.9-2zm2.2 9.3c1.3 0 2-.4 2-1.3 0-.7-.4-1.2-1.3-1.4l-.6-.1c-.4-.1-.5-.3-.5-.6s.2-.5.6-.5c.5 0 .8.2.8.6l1-.1c-.1-.9-.7-1.3-1.7-1.3-1.1 0-1.7.5-1.7 1.4 0 .7.4 1.1 1.1 1.3l.7.1c.4.1.6.3.6.6 0 .4-.3.6-1 .6-.8 0-1.4-.4-1.7-1.3l-.3-.9c-.2-.7-.5-1.1-.8-1.4-.3-.2-.7-.4-1.4-.4-.6 0-1.1.3-1.6.7-.4.4-.6 1-.6 1.8 0 .7.2 1.2.6 1.6.4.4 1 .6 1.6.6.6 0 1-.1 1.4-.4l-.3-.8c-.3.3-.7.4-1.1.4-.4 0-.7-.1-.9-.4-.3-.3-.4-.6-.4-1.1 0-.5.1-.9.4-1.2s.6-.4 1-.4c.3 0 .6.1.8.3.1.2.3.5.4 1l.3.9c.4 1.2 1.2 1.7 2.6 1.7' })
    )
  );
};

exports.default = Icon;