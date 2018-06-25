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
      _react2.default.createElement('path', { d: 'M18.5 18.7c0 1.3-1 2.3-2.2 2.3S14 20 14 18.7c0-1.6 2.3-4.2 2.3-4.2s2.2 2.6 2.2 4.2zM4 17.4c-.1-.6.2-1.1.7-1.3l2.3-.6-1.7-1.6c-.4-.4-.4-1.1 0-1.5.4-.4 1.1-.4 1.5 0l1.7 1.7.5-2.3c.2-.6.7-.9 1.3-.7.5.1.9.7.7 1.2l-.6 2.3 2.3-.6c.5-.2 1.1.2 1.2.7.2.6-.1 1.1-.7 1.3l-2.2.5 1.6 1.7c.4.4.4 1.1 0 1.5-.4.4-1.1.4-1.5 0L9.5 18l-.6 2.3c-.1.5-.7.8-1.3.7-.5-.1-.8-.7-.7-1.3l.6-2.2-2.2.6c-.6.1-1.2-.2-1.3-.7zM1 11c0-2.8 2.2-5 5-5 1-2.4 3.3-4 6-4 3.4 0 6.2 2.7 6.5 6h.5c2.2 0 4 1.8 4 4s-1.8 4-4 4c-.6 0-1-.4-1-1s.4-1 1-1c1.1 0 2-.9 2-2s-.9-2-2-2h-2V9c0-2.8-2.2-5-5-5-2.5 0-4.5 1.8-4.9 4.2C6.7 8.1 6.4 8 6 8c-1.7 0-3 1.3-3 3 0 .8.4 1.6.9 2.2.4.4.4 1 0 1.3-.4.4-1 .4-1.4 0C1.6 13.6 1 12.4 1 11z' })
    )
  );
};

exports.default = Icon;