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
      _react2.default.createElement('path', { d: 'M23 12.5q0-.5-.7-.5H7.7q-.5 0-1.1.3t-1 .7l-3.9 4.9q-.3.3-.3.5 0 .5.7.5h14.6q.6 0 1.2-.3t.9-.7l4-4.9q.2-.3.2-.5zM7.7 10.3H18V8.1q0-.5-.4-.9t-.9-.3H9q-.5 0-.9-.4t-.4-.9v-.9q0-.5-.4-.9t-.9-.4H2.1q-.5 0-.9.4t-.3.9v11.4l3.4-4.2q.6-.7 1.5-1.2t1.9-.4zm17 2.2q0 .8-.6 1.6l-4 4.8q-.5.7-1.5 1.2t-1.9.5H2.1q-1.2 0-2.1-.9t-.9-2.1V4.7q0-1.2.9-2.1t2.1-.9h4.3q1.3 0 2.1.9t.9 2.1v.4h7.3q1.2 0 2.1.9t.9 2.1v2.2h2.6q.7 0 1.3.3t.9 1q.2.4.2.9z' })
    )
  );
};

exports.default = Icon;