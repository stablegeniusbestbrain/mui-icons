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
      _react2.default.createElement('path', { d: 'M11.1 6.9q0-1.1-.7-1.9t-1.8-.7-1.8.7T6 6.9q0 .5.3 1.1-.6-.3-1.2-.3-1 0-1.8.8t-.7 1.8.7 1.8 1.8.8 1.9-.8.7-1.8q0-.6-.2-1.1.5.2 1.1.2 1 0 1.8-.7t.7-1.8zm11.4 9.4q0 .2-.6.9t-.9.6q-.1 0-.4-.2t-.5-.4-.5-.6-.3-.3L18 17.6l2.9 2.9q.4.4.4.9 0 .6-.5 1.1t-1.1.5q-.5 0-.9-.3l-9-9q-2.3 1.7-4.9 1.7-2.2 0-3.5-1.3T0 10.5q0-2.1 1.3-4.2T4.6 3t4.2-1.3q2.2 0 3.5 1.4t1.4 3.5q0 2.6-1.7 4.9l4.7 4.8L18 15l-.3-.3q-.3-.3-.6-.5t-.4-.5-.2-.4q0-.2.6-.9t.9-.7q.2 0 .3.2l.6.6q.5.5 1.1 1t1.2 1.2 1 1 .3.6z' })
    )
  );
};

exports.default = Icon;