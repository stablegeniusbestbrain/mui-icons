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
      _react2.default.createElement('path', { d: 'M7.1 19.1l2.3 2.4-.4-2.6-2.4-2.4.5 2.6zM9.5 22l-2.6-2.7v-.1l-.6-3v-.1-.1l.7-.4-1-.9c-.1 0-.1-.1-.1-.1l-.8-3.9v-.1h.1l1-.5-1.4-1.2s-.1 0-.1-.1l-1-5.2v-.1L8.6 2h.1l3.5 1.7.1.1.2 5.2s0 .1-.1.1l-1.3.7 1.4.9c.1 0 .1.1.1.1v1.4l1.4-.8c0-.1.1-.1.1 0l.9.6.1-1.2v-.1l2.3-1.4c.1-.1.1-.1.2-.1l2.7 1.6v.1l-.3 2.8s-.1 0-.1.1l-2.1 1.7h-.2l-.8-.6v1.3c0 .1-.1.1-.1.1l-2.6 2.1h-.2l-1-.9V19.4L9.6 22h-.1zm7.4-8.8V14.6l.7.6.2-2.7-2.5-1.5v1.1l1.6 1.1zm-3 2.2l-1.2-.9V14.8l-.9.6 1 .8v1l1.1.8v-2.6zm-7.7-.9l2.5 2.4-.5-3.6L5.4 11l.8 3.5zM5 8.8L7.8 11l-.7-5.2L4 3.9l1 4.9zm13.1 3.8l-.2 2.5 1.8-1.5.4-2.5-2 1.5zm-4 5.5l2.4-1.9.2-2.7-2.6 1.9v2.7zm-1.4 1.1l-.1-2.7-3.4 2.4.4 2.8 3.1-2.5zM7.3 5.8l.8 5.3 4.1-2.2L12 4 7.3 5.8zm1.1 7.5L9 17l3.5-2.4-.2-3.6-3.9 2.3z' })
    )
  );
};

exports.default = Icon;