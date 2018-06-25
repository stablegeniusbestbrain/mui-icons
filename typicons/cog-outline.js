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
      _react2.default.createElement('path', { d: 'M13 5l.9 3.4 3.3-.9 1.5 2.6-2.5 2.4 2.5 2.4-1.5 2.6-3.3-.9L13 20h-3l-.9-3.4-3.3.9-1.5-2.6 2.5-2.4L4.3 10l1.5-2.6 3.3 1L10 5h3m0-2h-3c-.9 0-1.7.6-1.9 1.5l-.4 1.4-1.4-.4c-.2 0-.4-.1-.5-.1-.7 0-1.4.4-1.8 1L2.5 9c-.4.8-.3 1.9.4 2.5l1 1-1 1c-.7.7-.8 1.7-.4 2.5L4 18.6c.4.6 1.1 1 1.8 1 .1 0 .3-.1.5-.1l1.4-.4.4 1.4c.2.9 1 1.5 1.9 1.5h3c.9 0 1.7-.6 1.9-1.5l.4-1.4 1.4.4h.5c.7 0 1.4-.3 1.8-1l1.5-2.6c.4-.7.3-1.8-.4-2.4l-1-1 1-1c.7-.7.8-1.7.4-2.5L19 6.4c-.4-.6-1.1-1-1.8-1-.1 0-.3.1-.5.1l-1.4.4-.4-1.4c-.2-.9-1-1.5-1.9-1.5zm-1.5 7.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-1c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z' })
    )
  );
};

exports.default = Icon;