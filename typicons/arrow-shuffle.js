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
      _react2.default.createElement('path', { d: 'M4 9h3.5c.7 0 1.4.4 1.8 1 .4-.6.8-1.2 1.2-1.7-.8-.8-1.8-1.3-3-1.3H4c-.6 0-1 .4-1 1s.4 1 1 1zm7.7 3.1c.5-1.6 2.2-3.1 3.6-3.1h1.9l-1.3 1.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3L21 8l-3.7-3.7c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L17.2 7h-1.9c-2.2 0-4.7 2-5.5 4.5l-.5 1.4C8.7 14.8 7.2 16 6.5 16H4c-.6 0-1 .4-1 1s.4 1 1 1h2.5c1.8 0 3.9-1.9 4.7-4.5l.5-1.4zm4.2 1.2c-.4.4-.4 1 0 1.4l1.3 1.3h-2.4c-1.2 0-2.3-.9-2.7-2.1-.2.7-.6 1.5-1 2.2.8 1.1 2.2 1.9 3.7 1.9h2.4l-1.3 1.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3L21 17l-3.7-3.7c-.4-.4-1-.4-1.4 0z' })
    )
  );
};

exports.default = Icon;