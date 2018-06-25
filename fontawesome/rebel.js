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
      _react2.default.createElement('path', { d: 'M.3 11.7q.1-2.9 1.5-5.4T5.9 2h0q-.1.2-.3.5t-.7 1T4.1 5t-.6 1.8-.2 2 .5 2.1T5.3 13q.6.7 1.3.9t1.2.2 1-.3.6-.5l.2-.2q.5-.7.7-1.5t.1-1.7-.3-1.4-.3-1.1L9.6 7q-.1-.3-.4-.6t-.6-.6-.6-.4-.4-.2l-.2-.1 1.4-1.6q.5.3 1 .7t.8.9l.3.3q0-.6-.3-1.4t-.5-1.1l-.3-.4L12 0l2.1 2.4q-.4.6-.7 1.4T13.1 5l-.1.5q.3-.5.9-1t.9-.7l.3-.3 1.4 1.6q-.6.2-1.1.7t-.8.8l-.3.4q-.4.8-.6 1.8t-.1 2.3.8 2.1q.4.6 1 .8t1.1.1 1.1-.4.7-.4l.3-.3q.8-.7 1.3-1.5t.6-1.6.2-1.6-.3-1.6-.5-1.5-.6-1.2-.6-1-.4-.6l-.2-.2Q17.9 2 18 2h.1l.9.6q.3.2.8.7t.9.8.7.9.8 1 .6 1.2.5 1.3.3 1.6.2 1.8q0 3.5-1.5 6.3t-4.2 4.3T12 24q-2.5 0-4.7-1t-3.8-2.6-2.4-4-.8-4.7z' })
    )
  );
};

exports.default = Icon;