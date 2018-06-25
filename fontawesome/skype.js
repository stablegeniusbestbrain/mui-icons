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
      _react2.default.createElement('path', { d: 'M17.4 14.2q0-.6-.2-1.2t-.7-.9-1-.7-1.1-.4-1.1-.3l-1.4-.3q-.4-.1-.6-.2t-.5-.1-.4-.3-.2-.2-.1-.4q0-1.1 1.9-1.1.6 0 1 .2t.8.4.5.4.5.4.7.2q.6 0 1-.5t.3-1q0-.7-.7-1.3T14.2 6t-2.4-.3q-1 0-1.8.2t-1.6.6-1.2 1.2-.4 1.7q0 .8.2 1.4t.8 1 1 .7 1.4.4l2 .5q1.2.3 1.5.5.4.2.4.8 0 .5-.5.8t-1.5.4q-.6 0-1.2-.2t-.8-.5-.7-.6-.6-.6-.7-.2q-.7 0-1 .4t-.4 1q0 1.3 1.7 2.1t3.9.9q1 0 1.9-.2t1.6-.7T17 16t.4-1.8zm4.9 2.9q0 2.2-1.5 3.7t-3.7 1.5q-1.7 0-3.1-1.1-1 .2-2 .2-1.9 0-3.7-.7t-3-2-2-3-.7-3.7q0-1 .2-2-1.1-1.4-1.1-3.1 0-2.2 1.5-3.7t3.7-1.5q1.7 0 3.1 1.1 1-.2 2-.2 1.9 0 3.7.7t3 2 2 3 .7 3.7q0 1-.2 2 1.1 1.4 1.1 3.1z' })
    )
  );
};

exports.default = Icon;