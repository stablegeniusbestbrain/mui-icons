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
      _react2.default.createElement('path', { d: 'M27.4 13.9q.1 1.4-.3 2.6t-1.3 2.2-2.2 1.4-2.6.5q-2.1-.2-3.7-1.7t-1.8-3.7q-.2-1.5.3-2.8t1.6-2.3l-.9-1.4q-1.3 1.1-2 2.6t-.8 3.2q0 .4-.2.7t-.6.2H8.5q-.3 2.2-2 3.7t-3.9 1.5q-2.5 0-4.3-1.8t-1.7-4.2 1.7-4.3 4.3-1.7q1 0 2 .3l.3-.6Q3.3 6.9.9 6.9H0q-.3 0-.6-.3T-.9 6t.3-.6.6-.3h1.7q1.1 0 2 .2t1.5.5 1 .6.7.5h8.4l-1.2-1.8h-3q-.4 0-.6-.3t-.2-.7q.1-.3.3-.5t.6-.2h3.4q.4 0 .7.4l.9 1.4 1.5-1.5q.3-.3.7-.3h1.3q.4 0 .6.3t.3.6V6q0 .3-.3.6t-.6.3h-2.4l1.6 2.3q1.7-.9 3.6-.5 2 .3 3.3 1.8t1.6 3.4zm-24.8 5q1.5 0 2.7-1t1.5-2.5H2.6q-.5 0-.8-.4-.2-.4 0-.8l2-3.7q-.6-.2-1.2-.2-1.8 0-3.1 1.2t-1.2 3.1 1.2 3 3.1 1.3zm18.8 0q1.8 0 3.1-1.3t1.2-3-1.2-3.1-3.1-1.2q-.8 0-1.6.3l2.3 3.5q.2.3.2.6t-.4.6q-.2.1-.5.1-.4 0-.7-.4l-2.3-3.4q-1.3 1.2-1.3 3 0 1.7 1.3 3t3 1.3z' })
    )
  );
};

exports.default = Icon;