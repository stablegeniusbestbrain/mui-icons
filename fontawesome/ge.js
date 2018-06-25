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
      _react2.default.createElement('path', { d: 'M11.7 21.9v.9q-2.8-.1-5.2-1.4t-3.7-3.7l.7-.5q.4.7 1 1.3l.9-.7q2 2.2 4.9 2.8l-.2 1.2q.9.1 1.6.1zm-8-7.1l-1.1.4q.3.8.6 1.5l-.7.5Q1.2 14.7 1.2 12t1.3-5.2l.7.5q-.4.7-.6 1.5l1.1.4q-.5 1.3-.5 2.8 0 1.5.5 2.8zm16.8 2.4l.7.5q-1.4 2.3-3.7 3.7t-5.2 1.4v-.9q.7 0 1.6-.1l-.2-1.2q2.9-.6 4.9-2.8l.9.7q.6-.6 1-1.3zm-2.1-7.4l-3.1 1.1q.2.5.2 1.1t-.2 1.1l3.1 1.1q-.4 1.2-1.3 2.3l-2.5-2.2q-.7.9-1.9 1.1l.6 3.3q-.7.1-1.3.1t-1.3-.1l.6-3.3q-1.2-.2-1.9-1.1l-2.5 2.2q-.9-1.1-1.3-2.3l3.1-1.1q-.2-.5-.2-1.1t.2-1.1L5.6 9.8Q6 8.5 6.9 7.5l2.5 2.2q.8-.9 1.9-1.2l-.6-3.2q.6-.1 1.3-.1t1.3.1l-.6 3.2q1.1.3 1.9 1.2l2.5-2.2q.9 1 1.3 2.3zm-6.7-8.6v.9q-.9 0-1.6.1l.2 1.2Q7.4 4 5.4 6.2l-.9-.7q-.5.5-1 1.3l-.7-.5Q4.2 4 6.5 2.6t5.2-1.4zM22.8 12q0 2.7-1.3 5.2l-.7-.5q.3-.7.6-1.5l-1.1-.4q.5-1.3.5-2.8 0-1.5-.5-2.8l1.1-.4q-.2-.8-.6-1.5l.7-.5q1.3 2.5 1.3 5.2zm-1.6-5.7l-.7.5q-.5-.8-1-1.3l-.9.7q-2-2.2-4.9-2.8l.2-1.2q-.7-.1-1.6-.1v-.9q2.8.1 5.2 1.4t3.7 3.7zm2.2 5.7q0-2.3-.9-4.4t-2.4-3.7-3.7-2.4T12 .6t-4.4.9-3.7 2.4-2.4 3.7T.6 12t.9 4.4 2.4 3.7 3.7 2.4 4.4.9 4.4-.9 3.7-2.4 2.4-3.7.9-4.4zm.6 0q0 2.4-1 4.7t-2.5 3.8-3.8 2.5-4.7 1-4.7-1-3.8-2.5T1 16.7 0 12t1-4.7 2.5-3.8T7.3 1 12 0t4.7 1 3.8 2.5T23 7.3t1 4.7z' })
    )
  );
};

exports.default = Icon;