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
      _react2.default.createElement('path', { d: 'M11.7 9.9q0 1.1-.9 1.9t-2 .8-2-.8-.9-1.9q0-1.1.9-1.9t2-.8 2 .8.9 1.9zm6.7 0q0 1.1-.8 1.9t-2.1.8q-1.2 0-2-.8t-.9-1.9q0-1.1.9-1.9t2-.8q1.2 0 2.1.8t.8 1.9zm3 2.4V3.4q0-1.2-.4-1.7t-1.5-.5H4.6q-1.1 0-1.5.5t-.4 1.7v9q.6.3 1.2.5t1.1.4 1.1.3.9.1 1 .1.7 0 .8-.1.6 0q.9 0 1.3.4l.1.1q.4.3.8.7.1-1.2 1.6-1.2h.5q.4 0 .6.1t.6 0 .7 0 .7-.1.8-.1.9-.2.9-.3.9-.3.9-.5zm2.2 0q-1.6 1.9-5 3.3 1.2 3.8-.3 6.3-.9 1.5-2.4 1.9-1.4.5-2.5-.2-1.1-.6-1.1-2.2v-4.3q-.1-.1-.3-.1t-.3-.1v4.5q0 1.6-1.1 2.2-1.1.7-2.5.2-1.6-.4-2.4-2-1.4-2.4-.3-6.2-3.4-1.3-5-3.3-.3-.5-.1-.9t.8 0q.1.1.2.1t.1.1V2.3q0-.9.7-1.6T3.6 0h16.8q.9 0 1.6.7t.6 1.6v9.3l.3-.2q.5-.3.8 0t-.1.9z' })
    )
  );
};

exports.default = Icon;