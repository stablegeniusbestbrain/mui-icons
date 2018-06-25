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
      _react2.default.createElement('path', { d: 'M21.2 10.4q.8 0 1.4.5t.5 1.4q0 1.3-1.2 1.7l-2.3.8.7 2.3q.1.2.1.6 0 .8-.5 1.4t-1.4.5q-.6 0-1.1-.3t-.7-1l-.8-2.2-4.1 1.4.7 2.2q.1.3.1.6 0 .8-.5 1.4t-1.4.6q-.6 0-1.2-.4t-.7-.9l-.7-2.2-2 .7q-.4.1-.7.1-.8 0-1.4-.5t-.5-1.4q0-.6.4-1.1t.9-.7l2.1-.7L5.5 11l-2.1.7q-.3.1-.6.1-.8 0-1.4-.5T.9 9.9q0-.6.3-1.1t1-.7l2.1-.7-.7-2.2q-.1-.3-.1-.6 0-.8.5-1.4t1.4-.5q.6 0 1.1.3t.7 1L8 6.1l4.1-1.4-.7-2.1q-.1-.4-.1-.7 0-.7.6-1.3t1.3-.6q.6 0 1.2.4t.7.9l.7 2.2 2.2-.8h.5q.8 0 1.4.5t.6 1.3q0 .6-.4 1.1t-1 .7L17 7l1.4 4.2 2.2-.7q.3-.1.6-.1zm-10.6 3.5l4.1-1.4-1.4-4.2-4.1 1.4z' })
    )
  );
};

exports.default = Icon;