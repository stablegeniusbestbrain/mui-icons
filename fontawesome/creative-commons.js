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
      _react2.default.createElement('path', { d: 'M8.1 16.5q2.1 0 3.4-1.4.2-.2.1-.5l-.6-1.1q-.1-.1-.3-.2-.3 0-.4.2h-.1q0 .1-.1.1t-.2.2-.4.2-.3.2-.5.1-.5.1q-1 0-1.7-.7T5.9 12q0-1 .6-1.7t1.7-.7q.5 0 .9.2t.7.4l.2.2q.2.1.4.1t.3-.2l.7-1q.2-.3 0-.5l-.2-.2q-.1-.1-.4-.3t-.6-.4-.9-.3-1.2-.1q-2 0-3.3 1.3T3.5 12q0 2 1.3 3.2t3.3 1.3zm8.4 0q2.1 0 3.5-1.4.2-.2 0-.5l-.6-1.1q-.1-.1-.3-.2-.2 0-.4.2-.1.1-.2.1t-.2.2-.3.2-.4.2-.5.1-.5.1q-1 0-1.6-.7t-.7-1.7q0-1 .7-1.7t1.6-.7q.5 0 1 .2t.6.4l.2.2q.2.1.4.1t.3-.2l.7-1q.2-.3 0-.5 0-.1-.2-.2t-.4-.3-.6-.4-.9-.3-1.2-.1q-1.9 0-3.2 1.3T11.9 12q0 2 1.3 3.2t3.3 1.3zM12 2.1q-2 0-3.8.8T5 5 2.9 8.2 2.1 12t.8 3.8T5 19t3.2 2.1 3.8.8 3.8-.8T19 19t2.1-3.2.8-3.8-.8-3.8T19 5t-3.2-2.1-3.8-.8zM12 0q2.4 0 4.7 1t3.8 2.5T23 7.3t1 4.7-1 4.7-2.5 3.8-3.8 2.5-4.7 1-4.7-1-3.8-2.5T1 16.7 0 12t1-4.7 2.5-3.8T7.3 1 12 0z' })
    )
  );
};

exports.default = Icon;