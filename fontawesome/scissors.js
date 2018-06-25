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
      _react2.default.createElement('path', { d: 'M12.9 12q.3 0 .6.3t.2.6-.2.6-.6.2-.6-.2-.3-.6.3-.6.6-.3zm4 .9l6.8 5.3q.3.3.3.7-.1.5-.5.7l-1.7.9q-.2.1-.4.1t-.4-.1l-9.2-5.2-1.5.9h-.2q.2.7.2 1.3-.1 1.1-.8 2t-1.7 1.7Q6 22.3 4 22.3q-1.8 0-2.9-1.1-1.2-1.1-1.1-2.7.1-1 .8-2t1.7-1.7q1.8-1.1 3.7-1.1 1.2 0 2.1.4l.3-.3 1.6-.9-1.6-1q-.2-.1-.3-.3-.9.4-2.1.4-1.9 0-3.7-1.1-1.1-.7-1.7-1.7t-.8-2q-.1-.7.2-1.5t.9-1.2Q2.2 3.4 4 3.4q2 0 3.8 1.2 1.1.6 1.7 1.6t.8 2q0 .6-.2 1.3h.2l1.5.9L21 5.2q.2-.1.4-.1t.4.1l1.7.9q.4.2.5.7 0 .5-.3.7zM7.8 9.4q.6-.6.2-1.5T6.6 6.4Q5.4 5.6 4 5.6q-.9 0-1.5.5t-.2 1.4 1.4 1.6q1.2.8 2.5.8 1 0 1.6-.5zm-1.2 10q1.1-.7 1.4-1.6t-.2-1.5q-.6-.4-1.6-.4-1.3 0-2.5.7-1.1.7-1.4 1.6t.2 1.5q.6.4 1.5.4 1.4 0 2.6-.7zM9 11.1l1.3.8v-.1q0-.5.4-.8l.2-.1-1-.6-.4.3q0 .1-.1.2t-.2.1v.1h-.1zm3 3l1.3.5 9.8-7.7-1.7-.9-10.3 5.8v1.5L9 14.6l.1.1.1.1q.1 0 .2.1t.1.2l.4.3zm9.4 5.6l1.7-.8-6.9-5.5-2.4 1.8q0 .1-.2.1z' })
    )
  );
};

exports.default = Icon;