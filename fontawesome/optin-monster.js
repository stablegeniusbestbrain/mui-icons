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
      _react2.default.createElement('path', { d: 'M3 22.4q-.1.2-.3.5t-.5.3q-.4.2-.7 0t-.4-.4q0-.3.5-.8t.9-.5q.4 0 .5.3t0 .6zm18 0q.1.2.3.5t.5.3q.4.2.7 0t.4-.4q0-.3-.5-.8t-.9-.5q-.3 0-.5.3t0 .6zm.6-1.4q.2.3.8.8t1 .5q.6.2 1.1 0t.5-.7q0-.6-.9-1.4t-1.5-.8q-.6 0-.9.5t-.1 1.1zM2.4 21q-.2.3-.8.8t-1 .5q-.6.2-1.1 0t-.5-.7q0-.6.9-1.4t1.5-.8q.6 0 .9.5t.1 1.1zm9.7-15.1q-.5 0-1 .2.4.1.6.4t.2.7q0 .5-.3.8t-.9.3q-.7 0-1.1-.5v.5q0 1 .7 1.7t1.8.7q1.1 0 1.9-.7t.7-1.7-.7-1.7-1.9-.7zM16.2 3q-1.3-1.5-2.9-1.8t-3.3.6q.3-.8 1.1-1.3t1.5-.5 1.7.2 1.3 1 .6 1.8zm10.1 16.6q.1.1-.2.6.1.3.1.5 0 .7-.6 1.5t-1.5 1.2-1.5.5q-.7 0-1.3-.3t-.9-.8q-9.2.3-16.8 0-.3.5-.9.8t-1.3.3q-1.1 0-2.4-1.1t-1.2-2.1q0-.3.1-.5-.3-.5-.1-.6 0-.1.4 0 .2-.3.5-.7-.1-.4 0-.5.2-.1.6 0l.8-.4q0-.4.1-.5.3-.2.7.2.5-.1.8 0 .3.1.5.3v-1H2q-.7-.2-1.3-.6T0 15.2q-.2-.5 0-1.1.2-.8 1.2-1.2 0-.3.3-.5t.4-.3.5.1.2.4h.2q.6 0 .8.3.1 0 .1.1.1 0 .4-.1t.4 0q-.2-.2-.4-.2-.3-.6-1.2-.6v-.2q-.8 0-1.6-.2t-1.1-.6q-.5-.5-.6-1.3t0-1.5Q-.2 6.6.8 5.9q.3-.2.7 0t.4.5v.2q0 .2.1.3t0 .3.1.2.1.1q.3.2 1 .2.6-.6 1.3-1-.5 0-2.2.2l.7-.6q.8-.8 2.2-1.5 1.9-1 3.7-1.2-.2-.1-.5-.2t-.6-.2-.6-.1-.7-.1-.5-.2q7.9-1.7 12.1 1.9 1.3 1.1 2.1 3 1.1.1 1.6-.2.1 0 .1-.1t.1-.2.1-.3 0-.3v-.2q.1-.4.4-.5t.7 0q1 .7 1.3 2.4 0 .8-.1 1.5t-.6 1.3q-.3.4-1.1.6t-1.5.3v.1q-1 0-1.3.6-.2 0-.4.2h.4q.3 0 .4.1 0-.1.1-.1.2-.3.8-.3h.2q0-.3.2-.4t.5-.1.4.3.3.5q1.1.4 1.2 1.2.2.6.1 1.1-.2.7-.8 1.2T22 17h-.2v1q.2-.2.5-.3.3-.1.8 0 .4-.4.7-.2.2.1.2.5.4.2.7.4.4-.1.6 0 .1.1 0 .5.4.4.5.7.3-.1.5 0zM22.6 6.8q0 .4-.2.8 1.1.4 1.5 1.7.1-.5-.1-1.3t-.5-1.2q-.3-.3-.5-.2t-.2.2zm-1.1 1.4q.5.5.7 1.4t0 1.7q.8-.2 1.3-.6l.2-.4q0-.8-.4-1.5t-1.1-.9q-.2.2-.7.3zm-.5 0h-.6q.6 1.6.7 3.2h.6q.2-.9 0-1.8T21 8.2zM.1 9.3Q.5 8 1.6 7.6q-.1-.4-.1-.8 0-.2-.3-.2t-.4.2Q.4 7.2.2 8T.1 9.3zm.5 1.4q.4.4 1.3.6-.2-.8 0-1.7t.6-1.4q-.5-.1-.7-.3-.7.2-1.1.9t-.4 1.5q.1.3.3.4zm2.3.7q.2-1.6 1-3.1-.2 0-.7.2l-.6.3Q2 10 2.3 11.4h.6zm12.9.5q.1.6.3 1.5t.1 1.2q0 .2.1.3t.3-.1q.6-.2.9-1.1t.3-1.7q-.3 0-2-.1zm-3.7-8.5q-1.6 0-2.7 1.1T8.3 7.1q0 1.6 1.1 2.7t2.7 1.1 2.6-1.1 1.1-2.7q0-1.5-1.1-2.6t-2.6-1.1zm3 8.5h-2.8v1.2q0 .8.2.8.4.2 1.2.2T15 14q.1 0 .2-.5t0-1-.1-.6zm-3.6 2.7q.1-.1.1-.7t0-1.1 0-.9H8.7q0 .3-.1.9t0 1.1.2.6q.5.2 1.4.2t1.3-.1zm-5.3-2.5q-.2.7.1 1.5t1 1.2q.2.1.4 0t.1-.2q.1-.3.1-1.2t.2-1.4q-1 0-1.9.1zm-1.7 1.6q.1.3-.4.5 1.8 1.9 3.6 3.2t4.1 2.1q2.3-.7 4.2-2t3.9-3.3q-.4-.2-.4-.5v-.1q-.2 0-.6-.1t-.7 0q-.3 1.2-1.1 1.8-.7.5-1.1-.1l-.1-.1q-.1-.2-.2-.9 0 .1-.1.1t-.1.1-.1.1-.1.1h-.5l-.2.1h-.1q-1.5.1-2.2-.2l-.2.4q-.1.2-.2.2t-.3.1-.5 0H11q-2.4.3-2.8-.5 0 .8-.7.7-.6-.1-1.2-.7-.2-.2-.3-.4-.2-.3-.3-.8-.8.1-1.2.1v.1zm-1.1 8.5q.1-.2.1-.5-.3-.9-.7-1.7t-1-.9q-.6-.2-1.4.2t-1.4 1-.5 1.5q.5.7 1.4 1.2t1.5.6q.7 0 1.3-.4t.7-1zm.1-2.3q.3.8.3 1.6 2.6-1.6 5.3-2.4-1.3-.7-2.5-1.6t-2.4-2.2q0 .1-.3.2h-.1q-.1 0 0 .1.4.2.3.5-.1.3-.7.5-.2.1-.4.3-.1 1.1 0 2l.5 1zm.9 2.2q7.1.3 15.3 0-3.4-2-5.7-2.6-1 .4-2.1.7-.1.1-.2 0-.9-.3-1.7-.6-2.8.8-5.6 2.5zm15.8-.6q.1-.8.4-1.6.2-.5.5-1H21q.1-1 .1-2-.2-.1-.4-.4-.6-.1-.8-.4-.1-.3.3-.5v-.1l-.4-.2q-2.7 2.6-5.1 3.8 2.6.8 5.5 2.4zm5.3.3q.1-.7-.5-1.5t-1.4-1-1.4-.2q-.5.1-1 .9t-.7 1.8q0 .2.1.4.1.6.7 1t1.3.4q.7 0 1.5-.6t1.4-1.2z' })
    )
  );
};

exports.default = Icon;