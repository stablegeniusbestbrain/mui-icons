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
      _react2.default.createElement('path', { d: 'M14.4 13c.3 0 .5.1.7.4.2.2.3.6.3.9 0 .4-.1.8-.3 1-.2.3-.4.4-.7.4-.2 0-.5-.1-.7-.4-.2-.2-.3-.6-.3-1 0-.3.1-.7.3-.9s.5-.4.7-.4m3.5-3.6c.7.8 1.1 1.8 1.1 3 0 .7-.1 1.4-.3 2-.1.6-.4 1.1-.6 1.5-.3.3-.6.7-1 .9-.4.3-.7.5-1.1.7-.3.1-.6.2-1.1.3-.4 0-.7.1-.9.1h-4c-.2 0-.5-.1-.9-.1-.5-.1-.8-.2-1.1-.3-.4-.2-.7-.4-1.1-.7-.4-.2-.7-.6-1-1-.2-.3-.5-.8-.6-1.4-.2-.6-.3-1.3-.3-2 0-1.2.4-2.2 1.1-3-.1 0-.1-.4 0-1.2.1-.8.2-1.5.5-2.1.9.1 2.1.6 3.5 1.5.4-.1 1.1-.1 1.9-.1.9 0 1.5 0 1.9.1.6-.4 1.2-.7 1.8-1 .6-.2 1-.4 1.3-.4l.4-.1c.3.6.4 1.3.5 2.1.1.8.1 1.2 0 1.2M12 17.2c1.7 0 3-.2 3.8-.6.9-.4 1.3-1.2 1.3-2.5 0-.7-.2-1.3-.8-1.8-.3-.3-.6-.4-1-.5h-1.7c-.8.1-1.3.1-1.6.1-.4 0-.8 0-1.3-.1H9.5c-.3 0-.6 0-1 .1-.3.1-.6.2-.8.4-.5.5-.8 1.1-.8 1.8 0 1.3.4 2.1 1.3 2.5.8.4 2.1.6 3.8.6M9.6 13c.3 0 .5.1.7.4.2.2.3.6.3.9 0 .4-.1.8-.3 1-.2.3-.4.4-.7.4-.3 0-.5-.1-.7-.4-.2-.2-.3-.6-.3-1 0-.3.1-.7.3-.9.2-.3.4-.4.7-.4' })
    )
  );
};

exports.default = Icon;