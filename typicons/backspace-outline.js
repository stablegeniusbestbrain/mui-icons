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
      _react2.default.createElement('path', { d: 'M19 21H9c-1.4 0-3.1-.9-4-2l-2.6-3.7-1.2-1.7c-.2-.3-.2-.9 0-1.2l1.2-1.7L5 7c.9-1.1 2.6-2 4-2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3zM3.2 13l.8 1.1 2.7 3.7c.4.6 1.5 1.2 2.3 1.2h10c.6 0 1-.4 1-1V8c0-.5-.4-1-1-1H9c-.8 0-1.9.6-2.3 1.2L4 11.9 3.2 13zm10.5 0l2.7-2.6c.1-.2.1-.6 0-.8-.2-.1-.6-.1-.8 0L13 12.3l-2.6-2.7c-.2-.1-.6-.1-.8 0-.1.2-.1.6 0 .8l2.7 2.6-2.7 2.6c-.1.2-.1.6 0 .8.1.1.3.1.4.1s.3-.1.4-.1l2.6-2.7 2.6 2.7c.1.1.3.1.4.1s.3-.1.4-.1c.1-.2.1-.6 0-.8L13.7 13z' })
    )
  );
};

exports.default = Icon;