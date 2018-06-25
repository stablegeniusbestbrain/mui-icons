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
      _react2.default.createElement('path', { d: 'M10.5 14.4q0 .1-.2 0t-.4-.1l-.3-.1q-.6-.3-1.1-.7-.1-.1-.6-.4t-.5-.4q-.9 1.4-1.8 2.4-1.1 1.3-1.4 1.5h-.5q.1 0 1.1-1.2.3-.3 1.1-1.5T7 12.3q.2-.4.7-1.3t.4-1.1q-.1 0-1.4.5-.1 0-.4.1t-.5.1-.2.1v.2q-.1.2-.4.2-.4.1-.7 0-.2 0-.3-.2-.1-.1-.1-.3.1-.1.3-.1t.4-.1q.8-.2 1.4-.4l1.4-.5q.1 0 .6-.3t.5-.2q.2-.1.3-.1t.2-.1.1 0v.4q0 .1-.2.4t-.3.7-.3.5q-.3.6-1 1.7l.9.4q.1.1 1 .4t.9.4l.1.3q.1.3.1.4zM7.7 7.9q.1.2 0 .4-.2.3-.7.5-.4.2-.8.2-.3-.1-.7-.4-.1-.2-.2-.5V8q.1.1.3.1t.3 0 .8-.2q.5-.2.7-.2.3 0 .3.2zm9.4 1.8l.8 3-1.8-.6zM2.2 20.4l9.3-3.1V3.4L2.2 6.6v13.8zm16.7-4.3l1.3.4-2.4-8.8-1.3-.4-2.9 7.2 1.3.4.6-1.5 2.9.9zM12.1 3.2l7.7 2.5V.6zM16.3 21l2.1.1-.7 2.2-.6-.9q-1.7 1.1-3.7 1.4-.7.2-1.2.2h-1.1q-1.1 0-2.7-.5T6 22.3q-.1-.1-.1-.2v-.2q0-.1.2 0 .1 0 .2.1t.5.2.2.1q1 .5 2.2.9t2.1.3q1.2 0 2.2-.2t2.1-.7l.4-.2q.2-.1.5-.2t.4-.3zm6-14.5V21l-10.4-3.3q-.2 0-5 1.7T2 21q-.2 0-.3-.2V6.3l.1-.1q0-.1.2-.1 1.5-.5 2-.7V.3l7.5 2.6 2.2-.7q2.2-.7 4.2-1.5T20 0q.3 0 .3.3v5.6z' })
    )
  );
};

exports.default = Icon;