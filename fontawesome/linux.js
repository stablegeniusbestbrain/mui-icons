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
      _react2.default.createElement('path', { d: 'M10.6 5.5q-.2 0-.2.1t-.1.2q-.1 0-.1-.1 0-.2.3-.2h.1zm1.2.2q-.1 0-.2-.1t-.2-.1q.3-.1.4.1v.1zm-4.7 5.7q-.1 0-.1.1t-.1.1-.1.2-.1.2q-.1.1 0 .1t.2-.1.1-.2l.1-.1q.1-.1 0-.1t0-.1v-.1zm11.4 4.8q0-.2-.7-.5 0-.2.1-.4t0-.4.1-.2 0-.3 0-.3-.1-.3 0-.3-.1-.3-.1-.4q-.1-.6-.6-1.3t-1-1.1q.4.3.8 1.2 1.2 2.1.7 3.7-.1.5-.6.5-.5.1-.6-.2t-.1-1.1-.1-1.5q-.1-.5-.3-.9t-.2-.6-.3-.3-.1-.2-.1-.1q-.2-.8-.4-1.4t-.4-.7-.4-.5-.2-.5q0-.3.1-.7t.1-.7-.6-.3l-.6-.3q-.4-.2-.5-.2-.1 0-.1-.3t.1-.7.5-.4q.5 0 .6.4t.1.8q-.1.3 0 .4t.4 0q.1-.1.1-.5v-.5q0-.4-.1-.7t-.3-.4-.3-.2-.4-.1q-1.4.1-1.2 1.8v.2q-.1-.1-.4-.1t-.4 0-.2-.1q0-.8-.3-1.2t-.6-.5q-.3 0-.5.4t-.2.8v.5q0 .3.2.5t.2.2l.2-.2q.1-.1-.1-.1-.1 0-.2-.2t-.1-.5q0-.3.1-.5t.5-.1q.2 0 .3.2t.1.6 0 .3q-.3.2-.4.3-.1.2-.4.4t-.2.1q-.2.2-.2.4t.1.2l.3.3.2.2.3.2q.3.2.4.1.7 0 1.4-.2l.3-.1q.3-.1.5-.1T13 7t.2-.2q.2-.2.3-.1.1 0 .1.1t0 .1-.3.2q-.2 0-.7.2t-.6.3q-.6.3-1 .3-.3.1-1 0h-.1q.1 0 .2.3.3.3.9.3.2 0 .5-.1t.4-.2.5-.3.4-.2.3-.1.3-.1.1.2-.1.1-.1.1-.1 0-.1.1-.1.1-.2 0l-.9.6-.9.6q-.3.2-.6 0t-.9-1q-.3-.4-.3-.3v.2q0 .3-.2.7t-.4.8-.3.7.2.9q-.3.1-.9 1.2T7 14.4v.9q0 .7-.1.8-.1.3-.4 0-.4-.4-.5-1.2 0-.4.1-.8v-.2H6q-.5.9.1 2.3.1.1.4.3t.3.3q.3.3 1.4 1.2t1.2 1q.3.2.3.6t-.2.5-.6.3q.1.2.4.6t.3.8.1.9q.7-.3.1-1.2 0-.1-.1-.2t-.1-.2-.1-.1q.1-.1.2-.1t.3 0q.6.7 2.2.5 1.8-.2 2.4-1.2.3-.5.4-.4.2.1.2.7-.1.4-.3 1.3-.2.3-.1.5t.3.2q0-.3.2-1.1t.2-1.2q0-.2-.1-.9t-.1-1.3.3-1q.2-.2.7-.2 0-.5.4-.7t1-.2.8.3zM10.1 5.1v-.4q0-.2-.2-.2-.1 0-.1.1t.1.1q.1 0 .1.2-.1.3.1.3v-.1zm5.6 2.7q0-.1-.1-.2t-.2 0-.1-.1q-.1-.1-.2-.1t-.1-.1 0-.1-.1-.1 0 .1q-.2.2 0 .5t.6.5q.1 0 .2-.2t0-.2zm-2.4-2.9v-.2q0-.1-.2-.2t-.1 0q-.2 0-.1.1h.1q.1 0 .2.4h.1zm.7-3.1v-.1q0-.1-.1-.1t-.1 0q-.2-.2-.4-.2-.1 0-.1.1t0 .1 0 .2q0 .1-.1.1t-.1.2.1.1h.1q.1 0 .1-.1t.2-.2H13.9q.1 0 .1-.1zm7.6 18q.3.1.4.3t.2.3 0 .3-.2.3-.4.3-.4.2-.4.2-.4.3-.4.1q-.5.3-1.1.8t-1 .8q-.3.2-.9.3t-1.2-.2q-.3-.1-.4-.3t-.3-.4-.2-.2-.7-.1q-.6-.1-1.7-.1-.3 0-.8.1t-.8 0q-.5 0-1 .2t-.7.4-.6.4-.7.1q-.4 0-1.5-.4t-2-.6q-.2 0-.7-.1t-.6-.1-.6-.1-.4-.2-.2-.3q-.2-.3.1-.9t.2-.7q0-.2-.1-.5t-.1-.6-.1-.5.2-.4q.2-.1.8-.2t.8-.1q.4-.3.5-.5t.2-.7q.3 1-.4 1.5-.5.2-1.2.2-.4-.1-.5.1-.2.2 0 .8.1 0 .1.2t.2.2 0 .3 0 .3q0 .2-.2.6t-.2.7q.1.2.5.3.3.1 1.1.3t1.4.2q.3.1 1 .3t1.1.3.7.1q.6-.1.9-.4t.3-.6-.1-.8-.3-.7-.2-.5q-1.7-2.5-2.3-3.2-.9-1-1.5-.6-.2.1-.2-.2-.1-.2 0-.5 0-.4.1-.7t.3-.6.3-.6q.1-.3.4-.9t.4-1.1.4-.8.5-.7q1.5-1.9 1.6-2.6-.1-1.5-.2-4.2 0-1.2.3-2T10.2.3q.5-.3 1.4-.3.7 0 1.4.2t1.2.5q.7.6 1.2 1.7t.4 1.9q-.1 1.3.4 2.9.4 1.5 1.8 2.9.7.8 1.3 2.2t.8 2.6q.1.6.1 1.1t-.2.7-.3.3l-.3.3q-.2.2-.3.5t-.6.4-.8.2q-.2 0-.4-.1t-.3-.1-.2-.3-.2-.2-.1-.3q-.3-.5-.5-.4t-.4.7.1 1.3q.3.9 0 2.6-.1.8.3 1.3t.9.5 1.2-.5q.8-.7 1.2-.9t1.4-.6q.7-.2 1-.5t.2-.4-.3-.4-.7-.3q-.4-.2-.7-.7t-.2-.9.3-.7q0 .4.1.8t.2.5.2.4.3.3.3.1.2.2z' })
    )
  );
};

exports.default = Icon;