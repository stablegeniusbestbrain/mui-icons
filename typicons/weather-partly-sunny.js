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
      _react2.default.createElement('path', { d: 'M14.5 3l-1 3-1-3c-.2-.6.1-1.1.7-1.3.5-.2 1.1.1 1.3.6.1.3.1.5 0 .7zm5.4 3L17 7.5l1.4-2.9c.3-.5.9-.7 1.5-.4.5.2.7.9.4 1.4-.1.2-.2.3-.4.4zm1.6 6l-3-1 3-1c.6-.2 1.1.1 1.3.7.2.5-.1 1.1-.6 1.3-.3.1-.5.1-.7 0zM8.6 4.6L10 7.5 7.1 6.1c-.5-.3-.7-.9-.4-1.5.2-.5.9-.7 1.4-.4.2.1.4.2.4.4zm9.2 7.7c.1-.4.2-.8.2-1.3 0-2.5-2-4.5-4.5-4.5-1.3 0-2.5.6-3.4 1.5H10c-1.8 0-3.4.8-4.5 2-.2-.1-.4-.1-.7 0-.5.2-.8.8-.6 1.3 0 .2.1.3.2.4-.2.7-.4 1.5-.4 2.3v.1c-1.7.5-3 2-3 3.9 0 2.2 1.8 4 4 4h11c2.8 0 5-2.2 5-5 0-2.1-1.3-3.9-3.2-4.7zm-4.3-3.8c1.4 0 2.5 1.1 2.5 2.5 0 .4-.1.7-.2 1-.4 0-.8.1-1.2.2-.5-1.3-1.6-2.4-2.9-2.9.4-.5 1.1-.8 1.8-.8zM16 20H5c-1.1 0-2-.9-2-2s.9-2 1.9-2h1.4l-.2-1.2c-.1-.3-.1-.5-.1-.8 0-2.2 1.8-4 4-4h.1c1.9 0 3.5 1.4 3.8 3.3l.1.1c.1.5.5.7.9.8l.3-.1c.3-.1.6-.1.8-.1 1.7 0 3 1.3 3 3s-1.3 3-3 3z' })
    )
  );
};

exports.default = Icon;