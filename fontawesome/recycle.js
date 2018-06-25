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
      _react2.default.createElement('path', { d: 'M11.2 15.7l-.2 4.9v.3l-5.7-.4q-.4 0-.9-.4t-.6-.9q-.1-.4-.2-.7t.1-.9.1-.8.3-.8.3-.7q1 .1 6.8.4zM6 7.8l2.4 5.1-1.9-1.2q-.9.9-1.5 1.9t-1 1.7-.5 1.2-.3.9v.3L.6 12.9q-.2-.4-.2-.8t.1-.6l.1-.3q.4-.8 1.5-2.5L.2 7.6zm16.5 6.9L20 19.5q-.2.4-.5.7t-.6.2l-.2.1q-1 .1-3 .2l.1 2.1-3-4.9 2.8-4.8.1 2.3q2.3.2 3.8.1t2.3-.5zM12 2.4q-.6.8-3.6 5.8L4.2 5.7l-.3-.2L7 .8q.2-.5.8-.7t1-.1q.3 0 .7.2t.5.3.6.4.5.5.5.5.4.5zm8.8 4.1l2.8 4.8q.2.5.2 1t-.4 1q-.2.3-.4.5t-.6.4-.6.3-.6.2-.7.2-.6.2q-.5-1-3.6-5.9l4.2-2.6zm-2-3.1l1.9-1.1-2.9 5-5.6-.2 2-1.2q-.4-1.2-1-2.2t-1-1.7-.9-1-.6-.7l-.2-.1h5.4q.4-.1.8.1t.5.4l.1.2q.6.8 1.5 2.5z' })
    )
  );
};

exports.default = Icon;