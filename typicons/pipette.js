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
      _react2.default.createElement('path', { d: 'M21.4 7.3c.1-1.2-.4-2.4-1.2-3.1-.7-.8-1.8-1.2-2.9-1.2-1.1 0-2.2.5-2.8 1.2-.7.9-1.4 2.7-1.8 3.7l-1.6-1.6c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l.3.3-5.2 5.2c-.4.4-.8.9-1 1.5 0 .1-1.7 4.4-.1 6 .5.5 1.3.7 2.2.7 1.8 0 3.7-.8 3.8-.8.6-.3 1.1-.6 1.5-1l5.2-5.2.3.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-1.6-1.6c1-.4 2.8-1.1 3.6-1.8.8-.6 1.2-1.5 1.3-2.6zm-16.3 12c-.2-.3-.1-1.5.2-2.6l2.4 2.4c-1.1.3-2.3.4-2.6.2zm4.7-1.1c-.2.2-.5.4-.9.5l-.1.1-3.2-3.2v-.1c.2-.4.4-.7.6-.9l5.2-5.2L15 13l-5.2 5.2z' })
    )
  );
};

exports.default = Icon;