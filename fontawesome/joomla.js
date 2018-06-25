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
      _react2.default.createElement('path', { d: 'M16 14.4l-2.1 2.1-2 2-.4.5q-.9.8-2.1 1.1t-2.2 0q-.3 1-1 1.6t-1.7.6q-1.2 0-2-.8t-.8-2q0-.9.6-1.7t1.5-1q-.3-1.1 0-2.3t1.2-2l.2-.2 2 2.1-.1.1q-.5.5-.5 1.2t.5 1.2q.5.5 1.2.5t1.1-.5l.4-.4 2.1-2 2.1-2.2zm-4.5-9.2l.1.2-2 2-.2-.1q-.5-.5-1.1-.5t-1.2.5-.5 1.2.5 1.2l.3.4 2.1 2 2.1 2.1-2 2.1-2.2-2.2-2-2-.4-.4q-.9-.9-1.2-2.1t.1-2.4q-1-.2-1.6-1t-.6-1.7q0-1.2.8-2t2-.8q1 0 1.8.7T7.2 4q1.1-.3 2.3.1t2 1.1zm10.8 14.3q0 1.2-.8 2t-2 .8q-1 0-1.7-.6t-1-1.6q-1.1.4-2.4.1T12.3 19l-.2-.2 2-2 .2.1q.5.5 1.2.5t1.2-.5.5-1.2-.5-1.2l-.4-.4-2-2-2.2-2.1 2-2.1 2.2 2.2 2 2 .4.4q.9.9 1.2 2t0 2.3q1 .2 1.7.9t.7 1.8zm0-15q0 1-.7 1.8t-1.7.9q.3 1.1 0 2.4t-1.2 2.1l-.2.2-2-2.1.2-.1q.5-.5.5-1.2t-.5-1.2-1.2-.5-1.2.5l-.4.4-2 2-2.2 2.2-2-2.1 2.1-2.1 2.1-2.1.4-.4q.9-.9 2.1-1.2t2.4.1q.1-1 .9-1.7t1.8-.7q1.2 0 2 .8t.8 2z' })
    )
  );
};

exports.default = Icon;