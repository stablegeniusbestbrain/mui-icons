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
      _react2.default.createElement('path', { d: 'M12 15.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm7.4-2.5c.1-.3.1-.7.1-1 0-.3 0-.7-.1-1l2.1-1.6c.2-.2.3-.5.2-.7l-2-3.4c-.2-.2-.4-.3-.7-.3l-2.4 1.1c-.6-.4-1.1-.8-1.7-1l-.4-2.7c0-.2-.3-.4-.5-.4h-4c-.2 0-.5.2-.5.4l-.4 2.7c-.6.2-1.1.6-1.7 1L5 5c-.3 0-.5 0-.7.3l-2 3.4c-.1.2 0 .5.2.7L4.6 11c-.1.3-.1.7-.1 1 0 .3 0 .7.1 1l-2.1 1.6c-.2.2-.3.5-.2.7l2 3.4c.2.2.4.3.6.2l2.5-1c.6.4 1.1.8 1.7 1l.4 2.7c0 .2.2.4.5.4h4c.2 0 .5-.2.5-.4l.4-2.7c.6-.2 1.1-.6 1.7-1l2.4 1c.3.1.5 0 .7-.2l2-3.4c.1-.2 0-.5-.2-.7L19.4 13z' })
    )
  );
};

exports.default = Icon;