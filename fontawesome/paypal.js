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
      _react2.default.createElement('path', { d: 'M22.1 8.7q.2 1.1-.1 2.7-1.2 5.9-7.6 5.9h-.6q-.3 0-.5.3t-.4.5v.3l-.8 4.6v.2q0 .4-.3.6t-.6.2H7.8q-.2 0-.4-.2t-.1-.5q.1-.7.3-2.2t.4-2.3.3-2.2.4-2.3q.1-.5.6-.5H11q1.8.1 3.2-.2 2.3-.6 3.8-2 1.4-1.2 2.1-3.3.3-.9.5-1.8v-.1q0-.1.1 0t0 .1q1.1.8 1.4 2.2zm-2.3-3.8q0 1.4-.7 3.1-1 3.2-4 4.3-1.5.5-3.4.5H9.3q-1.3 0-1.6 1.3 0 .1-1.1 7.1 0 .1-.2.1H2.5q-.3 0-.5-.2t-.2-.5L4.9.9q.1-.4.4-.6T6 0h8q.5 0 1.3.2t1.5.4q1.4.6 2.2 1.7t.8 2.6z' })
    )
  );
};

exports.default = Icon;